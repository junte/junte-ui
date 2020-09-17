import { Component, ContentChild, forwardRef, HostBinding, HostListener, Input, TemplateRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { PropertyApi } from '../../core/decorators/api';
import { Shape } from '../../core/enums/shape';
import { UI } from '../../core/enums/ui';

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
    }
  ]
})
export class ImageUploaderComponent implements ControlValueAccessor {

  ui = UI;
  pages = Pages;
  @HostBinding('attr.host') readonly host = 'jnt-image-uploader-host';

  private file: File;

  progress = {uploading: false};
  page = Pages.view;

  image: string;
  sketch: SafeUrl;

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

  writeValue(image: string) {
    this.logger.debug('write value ', image);
    this.image = image;

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
    ).subscribe(image => {
      this.image = image;
      this.onChange(image);
      this.page = Pages.view;
    });
  }

  cancel() {
    this.page = Pages.view;
  }

}
