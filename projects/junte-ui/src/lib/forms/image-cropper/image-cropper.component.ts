import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  isDevMode,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer, SafeStyle, SafeUrl } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { PropertyApi } from '../../core/decorators/api';
import { Shape } from '../../core/enums/shape';
import { UI } from '../../core/enums/ui';
import { I18N_PROVIDERS } from '../../core/i18n/providers';

const CROPPER_SIZE = 200;
const DEFAULT_SCALE = 1;
const MAX_SCALE = 5;

export type HammerStatic = new(element: HTMLElement | SVGElement, options?: any) => HammerManager;

export interface HammerManager {
  get(eventName: string): HammerManager;

  set(options: any): HammerManager;

  on(eventName: string, handler: (ev: any) => any);
}

export enum MoveTypes {
  Move = 'move',
  Pinch = 'pinch'
}

export class MoveStart {
  active: boolean = false;
  type: MoveTypes | null = null;
  left: number = 0;
  top: number = 0;
  clientX: number = 0;
  clientY: number = 0;
}

export class ImagePosition {
  left: number = 0;
  top: number = 0;
  scale: number = DEFAULT_SCALE;
  width: number = 0;
  height: number = 0;
}

export class CropperPosition {
  width: number = CROPPER_SIZE;
  height: number = CROPPER_SIZE;
}

export type ImageCroppedData = {
  left: number,
  top: number,
  scale: number
}

@Component({
  selector: 'jnt-image-cropper',
  templateUrl: './image-cropper.encapsulated.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageCropperComponent),
      multi: true
    }, ...I18N_PROVIDERS
  ]
})
export class ImageCropperComponent implements ControlValueAccessor, OnInit {

  ui = UI;
  @HostBinding('attr.host') readonly host = 'jnt-image-cropper-host';

  private Hammer: HammerStatic = typeof window !== 'undefined'
    ? (window as any).Hammer as HammerStatic : null;
  private moveStart = new MoveStart();
  private sizeRetries = 0;
  private _url: SafeUrl | string;

  transformStyle: SafeStyle | string;
  marginLeft: SafeStyle | string = '0px';
  moveTypes = MoveTypes;
  imagePosition = new ImagePosition();

  @ViewChild('wrapper', {static: true}) wrapper: ElementRef;
  @ViewChild('image') image: ElementRef;
  @ViewChild('cropper') cropper: ElementRef;

  @PropertyApi({
    description: 'Size of crop area',
    type: 'CropperPosition',
    default: '{width: 200, height: 200}'
  })
  @Input() area = new CropperPosition();

  @PropertyApi({
    description: 'Url of image',
    type: 'string',
    default: null
  })
  @Input() set url(url: SafeUrl | string) {
    this._url = url;
    if (!!url) {
      this.moveStart = new MoveStart();
      this.imagePosition = new ImagePosition();
    }
  }

  get url() {
    return this._url;
  }

  @HostBinding('attr.data-disabled')
  disabled = false;

  @HostBinding('attr.data-shape')
  _shape: Shape = Shape.circle;

  @PropertyApi({
    description: 'Avatar shape',
    path: 'ui.shape',
    default: Shape.circle,
    options: [Shape.circle, Shape.square]
  })
  @Input() set shape(shape: Shape) {
    this._shape = shape || Shape.circle;
  }

  @Output() loaded = new EventEmitter<void>();
  @Output() failed = new EventEmitter<void>();

  onChange: (date: ImageCroppedData) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(private logger: NGXLogger,
              private cd: ChangeDetectorRef,
              public sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    if (this.Hammer) {
      const hammer = new this.Hammer(this.wrapper.nativeElement);
      hammer.get('pinch').set({enable: true});
      hammer.on('pinchmove', this.moveImg.bind(this));
      hammer.on('pinchend', this.pinchStop.bind(this));
      hammer.on('pinchstart', this.startPinch.bind(this));
    } else if (isDevMode()) {
      console.warn('Could not find HammerJS - Pinch Gesture won\'t work');
    }
  }

  inView(): void {
    if (this.image.nativeElement.currentSrc.includes('image/svg')) {
      this.disabled = true;
    }
    this.loaded.emit();
    this.sizeRetries = 0;
    setTimeout(() => this.checkImageMaxSizeRecursively());
  }

  private checkImageMaxSizeRecursively(): void {
    if (this.sizeRetries > 40) {
      this.failed.emit();
    } else if (!!this.image && !!this.image.nativeElement && this.image.nativeElement.offsetWidth > 0) {
      const image = this.image.nativeElement;
      const wrapper = this.wrapper.nativeElement;
      this.imagePosition.width = image.width;
      this.imagePosition.height = image.height;
      let scale = Math.trunc(wrapper.offsetWidth / image.offsetWidth * 100) / 100;
      scale = Math.min(scale, Math.trunc(wrapper.offsetHeight / image.offsetHeight * 100) / 100, MAX_SCALE)
      this.zoom(scale);
      this.cd.detectChanges();
    } else {
      this.sizeRetries++;
      setTimeout(() => this.checkImageMaxSizeRecursively(), 50);
    }
  }

  startMove(event: any, moveType: MoveTypes): void {
    if (!!this.moveStart && this.moveStart.active && this.moveStart.type === MoveTypes.Pinch) {
      return;
    }
    if (!!event.preventDefault) {
      event.preventDefault();
    }
    this.moveStart = {
      active: true,
      type: moveType,
      clientX: this.getClientX(event),
      clientY: this.getClientY(event),
      ...this.imagePosition
    };
  }

  startPinch(event: any) {
    if (!this.url) {
      return;
    }
    if (!!event.preventDefault) {
      event.preventDefault();
    }
    this.moveStart = {
      active: true,
      type: MoveTypes.Pinch,
      clientX: this.imagePosition.left + (this.imagePosition.width - this.imagePosition.left) / 2,
      clientY: this.imagePosition.top + (this.imagePosition.height - this.imagePosition.top) / 2,
      ...this.imagePosition
    };
  }

  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:touchmove', ['$event'])
  moveImg(event: any): void {
    if (this.moveStart.active) {
      if (event.stopPropagation) {
        event.stopPropagation();
      }
      if (event.preventDefault) {
        event.preventDefault();
      }
      if (this.moveStart.type === MoveTypes.Move) {
        this.move(event);
      }
      this.cd.detectChanges();
    }
  }

  @HostListener('document:mouseup')
  @HostListener('document:touchend')
  moveStop(): void {
    if (this.moveStart.active) {
      this.moveStart.active = false;
      this.crop();
    }
  }

  pinchStop(): void {
    if (this.moveStart.active) {
      this.moveStart.active = false;
      this.crop();
    }
  }

  private crop() {
    const image = this.image.nativeElement;
    const cropper = this.cropper.nativeElement;
    const scale = this.imagePosition.scale;
    this.onChange({
      left: Math.round(cropper.offsetLeft - (image.offsetLeft - ((image.width * scale - image.width) / 2))),
      top: Math.round(cropper.offsetTop - (image.offsetTop - ((image.height * scale - image.height) / 2))),
      scale
    });
  }

  private move(event: MouseEvent) {
    const diffX = this.getClientX(event) - this.moveStart.clientX;
    const diffY = this.getClientY(event) - this.moveStart.clientY;

    this.imagePosition.left = this.moveStart.left + diffX;
    this.imagePosition.top = this.moveStart.top + diffY;
  };

  private getClientX(event: any): number {
    return (event.touches && event.touches[0] ? event.touches[0].clientX : event.clientX) || 0;
  }

  private getClientY(event: any): number {
    return (event.touches && event.touches[0] ? event.touches[0].clientY : event.clientY) || 0;
  }

  zoom(scale = DEFAULT_SCALE) {
    this.imagePosition.scale = scale;
    this.imagePosition.width = this.imagePosition.width * scale;
    this.imagePosition.height = this.imagePosition.height * scale;
    this.transformStyle = this.sanitizer
      .bypassSecurityTrustStyle(`scaleX(${scale || DEFAULT_SCALE})scaleY(${scale || DEFAULT_SCALE})`);
    this.cd.detectChanges();
    this.crop();
  }

  writeValue(data: ImageCroppedData): void {
    if (!!data) {
      this.imagePosition = {...this.imagePosition, ...data};
    }
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
