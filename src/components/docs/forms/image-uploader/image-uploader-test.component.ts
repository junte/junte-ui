import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ImageUploaderComponent, TabComponent, UI, UploadImageData } from 'junte-ui';
import { of } from 'rxjs';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-image-uploader-test',
  templateUrl: './image-uploader-test.component.html',
  styleUrls: ['./image-uploader-test.component.scss']
})
export class ImageUploaderTestComponent {

  ui = UI;
  localUi = LocalUI;
  types = {imageUploader: ImageUploaderComponent};
  avatar: UploadImageData;

  @ViewChild('code') code: TabComponent;

  shapeControl = this.fb.control(UI.shape.circle);

  builder = this.fb.group({
    shape: this.shapeControl
  });

  avatarControl = this.fb.control(null);
  form = this.fb.group({
    avatar: this.avatarControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

  uploadAvatar() {
    return (data: UploadImageData) => {
      this.avatar = data;
      return of(null);
    };
  }
}
