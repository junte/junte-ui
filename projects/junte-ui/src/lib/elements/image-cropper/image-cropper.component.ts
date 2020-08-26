import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  isDevMode,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { DomSanitizer, SafeStyle, SafeUrl } from '@angular/platform-browser';
import { PropertyApi } from '../../core/decorators/api';
import { Shape } from '../../core/enums/shape';
import { UI } from '../../core/enums/ui';

const CROPPER_SIZE = 200;
const DEFAULT_SCALE = 1;

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
  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;
  clientX: number = 0;
  clientY: number = 0;
}

export class ImagePosition {
  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;
  width: number = 0;
  height: number = 0;
}

export class CropperPosition {
  width: number = CROPPER_SIZE;
  height: number = CROPPER_SIZE;
}

export class ImageCroppedEvent {
  constructor(public x = 0, public y = 0, public width = 0, public height = 0, public scale = DEFAULT_SCALE) {
  }
}

export class Dimensions {
  width: number = 0;
  height: number = 0;
}

@Component({
  selector: 'jnt-image-cropper',
  templateUrl: './image-cropper.encapsulated.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageCropperComponent implements OnInit {

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
  scale = DEFAULT_SCALE;
  loading = null;
  image = new ImagePosition();

  @ViewChild('wrapper', {static: true}) wrapper: ElementRef;
  @ViewChild('sourceImage') sourceImage: ElementRef;

  @PropertyApi({
    description: 'Size of crop area',
    type: 'CropperPosition',
    default: '{width: 200, height: 200}'
  })
  @Input() cropper = new CropperPosition();

  @PropertyApi({
    description: 'Url of image',
    type: 'string',
    default: null
  })
  @Input() set url(url: SafeUrl | string) {
    this._url = url;
    if (!!url) {
      this.zoom(DEFAULT_SCALE);
      this.moveStart = new MoveStart();
      this.image = new ImagePosition();
      this.cropper = {width: this.cropper.width, height: this.cropper.height};
    }
  }

  get url() {
    return this._url;
  }

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

  @Output() cropped = new EventEmitter<ImageCroppedEvent>();
  @Output() loaded = new EventEmitter<void>();
  @Output() failed = new EventEmitter<void>();

  constructor(public sanitizer: DomSanitizer,
              private cd: ChangeDetectorRef) {
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

  load(event: any) {
    if (!!event && !!event.target && !!event.target.files && !!event.target.files.length) {
      this.loading = true;
      const fileReader = new FileReader();
      let file = event.target.files[0];
      fileReader.onload = (event: any) => {
        if (/image\/(png|jpg|jpeg|bmp|gif|tiff|webp)/.test(file.type)) {
          this.url = this.sanitizer.bypassSecurityTrustResourceUrl(event.target.result);
        } else {
          this.url = '';
          this.failed.emit();
        }
        this.loading = false;
      };
      fileReader.readAsDataURL(file);
    }
  }

  inView(): void {
    this.loaded.emit();
    this.sizeRetries = 0;
    setTimeout(() => this.checkImageMaxSizeRecursively());
  }

  private checkImageMaxSizeRecursively(): void {
    if (this.sizeRetries > 40) {
      this.failed.emit();
    } else if (this.sourceImage && this.sourceImage.nativeElement && this.sourceImage.nativeElement.offsetWidth > 0) {
      const image = this.sourceImage.nativeElement;
      this.image.width = image.width;
      this.image.height = image.height;
      this.image.x2 = image.width;
      this.image.y2 = image.height;
      this.cd.markForCheck();
    } else {
      this.sizeRetries++;
      setTimeout(() => this.checkImageMaxSizeRecursively(), 50);
    }
  }

  startMove(event: any, moveType: MoveTypes): void {
    if (this.moveStart && this.moveStart.active && this.moveStart.type === MoveTypes.Pinch) {
      return;
    }
    if (event.preventDefault) {
      event.preventDefault();
    }
    this.moveStart = {
      active: true,
      type: moveType,
      clientX: this.getClientX(event),
      clientY: this.getClientY(event),
      ...this.image
    };
  }

  startPinch(event: any) {
    if (!this.url) {
      return;
    }
    if (event.preventDefault) {
      event.preventDefault();
    }
    this.moveStart = {
      active: true,
      type: MoveTypes.Pinch,
      clientX: this.image.x1 + (this.image.x2 - this.image.x1) / 2,
      clientY: this.image.y1 + (this.image.y2 - this.image.y1) / 2,
      ...this.image
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

  private move(event: MouseEvent) {
    const diffX = this.getClientX(event) - this.moveStart.clientX;
    const diffY = this.getClientY(event) - this.moveStart.clientY;

    this.image.x1 = this.moveStart.x1 + diffX;
    this.image.y1 = this.moveStart.y1 + diffY;
    this.image.x2 = this.moveStart.x2 + diffX;
    this.image.y2 = this.moveStart.y2 + diffY;
  };

  crop() {
    this.cropped.emit(new ImageCroppedEvent(
      this.image.x1,
      this.image.y1,
      this.cropper.width,
      this.cropper.height,
      this.scale
    ));
  }

  private getClientX(event: any): number {
    return (event.touches && event.touches[0] ? event.touches[0].clientX : event.clientX) || 0;
  }

  private getClientY(event: any): number {
    return (event.touches && event.touches[0] ? event.touches[0].clientY : event.clientY) || 0;
  }

  zoom(scale: number) {
    this.scale = scale;
    this.transformStyle = this.sanitizer
      .bypassSecurityTrustStyle(`scaleX(${this.scale || DEFAULT_SCALE})scaleY(${this.scale || DEFAULT_SCALE})`);
    this.crop();
  }
}
