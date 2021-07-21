import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageCropperComponent, TabsComponent, UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-image-cropper-test',
  templateUrl: './image-cropper-test.component.html',
  styleUrls: ['./image-cropper-test.component.scss']
})
export class ImageCropperTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {imageCropper: ImageCropperComponent};
  handbook = HANDBOOK;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/forms/image-cropper';

  @ViewChild('tabs') tabs: TabsComponent;

  urlControl = this.fb.control('assets/images/elon.jpeg');
  shapeControl = this.fb.control(UI.shape.circle);
  minControl = this.fb.control(0.01);
  maxControl = this.fb.control(5);
  stepControl = this.fb.control(0.01);
  builder = this.fb.group({
    url: this.urlControl,
    shape: this.shapeControl,
    min: this.minControl,
    max: this.maxControl,
    step: this.stepControl
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
      .subscribe(() => this.tabs.flash(1));
  }

  imageLoaded() {
    console.log('Image loaded');
  }

  load(event: any) {
    if (!!event && !!event.target && !!event.target.files && !!event.target.files.length) {
      const fileReader = new FileReader();
      const file = event.target.files[0];
      fileReader.onload = (e: any) => {
        if (/image\/(png|jpg|jpeg|bmp|gif|tiff|webp|svg)/.test(file.type)) {
          this.urlControl.setValue(this.sanitizer.bypassSecurityTrustResourceUrl(e.target.result));
        } else {
          this.urlControl.setValue('');
        }
      };
      fileReader.readAsDataURL(file);
    }
  }
}
