import { Component, ContentChild, forwardRef, HostBinding, HostListener, Input, TemplateRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { PropertyApi } from '../../core/decorators/api';
import { Shape } from '../../core/enums/shape';
import { UI } from '../../core/enums/ui';
import { I18N_PROVIDERS } from '../../core/i18n/providers';
import { LOGGER_PROVIDERS } from '../../core/logger/providers';
import { CropperPosition, DEFAULT_MAX, DEFAULT_MIN, DEFAULT_STEP } from '../image-cropper/image-cropper.component';

export type UploadImageData = {
  left: number;
  top: number;
  scale: number;
  width: number;
  height: number;
  file: File;
}


enum Pages {
  view = 1,
  crop = 2
}

@Component({
  selector: 'jnt-image-uploader',
  templateUrl: './image-uploader.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageUploaderComponent),
      multi: true
    },
    ...I18N_PROVIDERS,
    ...LOGGER_PROVIDERS
  ]
})
export class ImageUploaderComponent implements ControlValueAccessor {

  ui = UI;
  pages = Pages;
  @HostBinding('attr.host') readonly host = 'jnt-image-uploader-host';

  private file: File;
  private _min = DEFAULT_MIN;
  private _max = DEFAULT_MAX;
  private _step = DEFAULT_STEP;

  progress = {uploading: false};
  page = Pages.view;

  sketch: SafeUrl;
  value: any;

  form = this.fb.group({
    cropping: []
  });

  @PropertyApi({
    description: 'Upload function',
    type: 'Function'
  })
  @Input()
  uploader: (data: UploadImageData) => Observable<string>;

  @PropertyApi({
    description: 'Image',
    type: 'string',
    default: ''
  })
  @Input()
  image: string;

  @PropertyApi({
    description: 'Value field',
    type: 'string',
    default: ''
  })
  @Input()
  valueField: string;

  @PropertyApi({
    description: 'Url field',
    type: 'string',
    default: ''
  })
  @Input()
  urlField: string;

  @PropertyApi({
    description: 'Avatar shape',
    path: 'ui.shape',
    default: Shape.circle,
    options: [Shape.circle, Shape.square]
  })
  @Input()
  shape = UI.shape.square;

  @PropertyApi({
    description: 'Width of uploader',
    type: 'number',
    default: 200
  })
  @Input()
  width = 200;

  @PropertyApi({
    description: 'Width of uploader',
    type: 'number',
    default: 200
  })
  @Input()
  height = 200;

  @PropertyApi({
    description: 'Size of crop area',
    type: 'CropperPosition',
    default: '{width: 200, height: 200}'
  })
  @Input()
  area = new CropperPosition();

  @PropertyApi({
    description: 'Min of cropping',
    type: 'number',
    default: '0.01'
  })
  @Input()
  set min(min: number) {
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
  @Input()
  set max(max: number) {
    this._max = max || DEFAULT_MAX;
  }

  get max() {
    return this._max;
  }

  @PropertyApi({
    description: 'Step of cropping',
    type: 'number',
    default: '0.01'
  })
  @Input()
  set step(step: number) {
    this._step = step || DEFAULT_STEP;
  }

  get step() {
    return this._step;
  }

  @ContentChild('imageTemplate')
  imageTemplate: TemplateRef<any>;

  onChange: (image: string) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(private fb: FormBuilder,
              private logger: NGXLogger,
              private sanitizer: DomSanitizer) {
  }

  writeValue(value: string) {
    this.logger.debug('write value ', value);
    this.value = value;
  }

  crop({target}: { target: HTMLInputElement }) {
    this.file = target.files[0];
    let fr = new FileReader();
    fr.onload = ({target: {result}}: ProgressEvent<FileReader>) => {
      this.sketch = this.sanitizer.bypassSecurityTrustUrl(result.toString());
      this.page = Pages.crop;
    };
    fr.readAsDataURL(this.file);
  }

  upload() {
    let fd = new FormData();
    fd.append('file', this.file, this.file.name);
    const {cropping} = this.form.getRawValue();
    this.progress.uploading = true;
    this.uploader({
      ...cropping,
      width: this.width,
      height: this.height,
      file: this.file
    } as UploadImageData).pipe(
      finalize(() => this.progress.uploading = false),
      tap(image => this.logger.debug('image uploaded ', image))
    ).subscribe((obj: Object | string) => {
      if (typeof obj === 'object') {
        this.image = obj[this.urlField];
        this.value = obj[this.valueField];
      } else {
        this.image = obj;
        this.value = obj;
      }
      this.onChange(this.value);
      this.page = Pages.view;
    });
  }

  cancel() {
    this.page = Pages.view;
  }

}
