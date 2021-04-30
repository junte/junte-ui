import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  Input, OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer, SafeStyle, SafeUrl } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { LOGGER_PROVIDERS } from '../../core/logger/providers';
import { PropertyApi } from '../../core/decorators/api';
import { Shape } from '../../core/enums/shape';
import { UI } from '../../core/enums/ui';
import { I18N_PROVIDERS } from '../../core/i18n/providers';

const CROPPER_SIZE = 200;
const DEFAULT_SCALE = 1;
const DEFAULT_MIN = 0.01;
const DEFAULT_MAX = 5;
const DEFAULT_STEP = 0.01;

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
    },
    ...I18N_PROVIDERS,
    ...LOGGER_PROVIDERS
  ]
})
export class ImageCropperComponent implements OnInit, ControlValueAccessor {

  ui = UI;

  @HostBinding('attr.host')
  readonly host = 'jnt-image-cropper-host';

  private moveStart = new MoveStart();
  private sizeRetries = 0;
  private _url: SafeUrl | string;
  private _min = DEFAULT_MIN;
  private _max = DEFAULT_MAX;
  private _step = DEFAULT_STEP;

  transformStyle: SafeStyle | string;
  marginLeft: SafeStyle | string = '0px';
  moveTypes = MoveTypes;
  imagePosition = new ImagePosition();

  form = this.fb.group({
    zoom: [this.imagePosition.scale]
  });

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
    description: 'Min of cropping',
    type: 'number',
    default: '0.01'
  })
  @Input() set min(min: number) {
    this._min = min || DEFAULT_MIN;
  }

  get min() {
    return this._min;
  }

  @PropertyApi({
    description: 'Max of cropping',
    type: 'number',
    default: '5'
  })
  @Input() set max(max: number) {
    this._max = max || DEFAULT_MAX
  }

  get max() {
    return this._max;
  }

  @PropertyApi({
    description: 'Step of cropping',
    type: 'number',
    default: '0.01'
  })
  @Input() set step(step: number) {
    this._step = step || DEFAULT_STEP;
  }

  get step() {
    return this._step;
  }

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
              private fb: FormBuilder,
              public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(({zoom}) => this.zoom(zoom))
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
      this.imagePosition.width = image.offsetWidth;
      this.imagePosition.height = image.offsetHeight;
      this.imagePosition.top = (wrapper.offsetHeight - image.offsetHeight) / 2;
      this.imagePosition.left = (wrapper.offsetWidth - image.offsetWidth) / 2;
      let scale = Math.trunc(wrapper.offsetWidth / image.offsetWidth * 100) / 100;
      scale = Math.min(scale, Math.trunc(wrapper.offsetHeight / image.offsetHeight * 100) / 100, this.max);
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
