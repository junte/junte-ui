import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageCropperComponent, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-image-cropper-test',
  templateUrl: './image-cropper-test.component.html',
  styleUrls: ['./image-cropper-test.component.scss']
})
export class ImageCropperTestComponent {

  ui = UI;
  localUi = LocalUI;
  types = {imageCropper: ImageCropperComponent};

  @ViewChild('code') code: TabComponent;

  shapeControl = this.fb.control(UI.shape.circle);
  urlControl = this.fb.control('assets/images/elon.jpeg');
  builder = this.fb.group({
    shape: this.shapeControl,
    url: this.urlControl
  });

  cropperControl = this.fb.control(null);
  form = this.fb.group({
    cropper: this.cropperControl
  });

  constructor(private fb: FormBuilder,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

  imageLoaded() {
    console.log('Image loaded');
  }

  load(event: any) {
    if (!!event && !!event.target && !!event.target.files && !!event.target.files.length) {
      const fileReader = new FileReader();
      let file = event.target.files[0];
      fileReader.onload = (event: any) => {
        if (/image\/(png|jpg|jpeg|bmp|gif|tiff|webp|svg)/.test(file.type)) {
          this.urlControl.setValue(this.sanitizer.bypassSecurityTrustResourceUrl(event.target.result));
        } else {
          this.urlControl.setValue('');
        }
      };
      fileReader.readAsDataURL(file);
    }
  }
}
