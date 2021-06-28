import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CropperPosition, ImageUploaderComponent, TabsComponent, UI, UploadImageData } from 'junte-ui';
import { combineLatest, of } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-image-uploader-test',
  templateUrl: './image-uploader-test.component.html',
  styleUrls: ['./image-uploader-test.component.scss']
})
export class ImageUploaderTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {imageUploader: ImageUploaderComponent};
  handbook = HANDBOOK;
  avatar: UploadImageData;
  area = new CropperPosition();

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/forms/image-uploader';

  @ViewChild('tabs') tabs: TabsComponent;

  shapeControl = this.fb.control(UI.shape.circle);
  minControl = this.fb.control(0.01);
  maxControl = this.fb.control(5);
  stepControl = this.fb.control(0.01);
  areaWidthControl = this.fb.control(200);
  areaHeightControl = this.fb.control(200);
  builder = this.fb.group({
    shape: this.shapeControl,
    min: this.minControl,
    max: this.maxControl,
    step: this.stepControl,
    areaWidth: this.areaWidthControl,
    areaHeight: this.areaHeightControl
  });

  avatarControl = this.fb.control(null);
  form = this.fb.group({
    avatar: this.avatarControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.tabs.flash(1));

    combineLatest([
      this.areaWidthControl.valueChanges.pipe(startWith(200)),
      this.areaHeightControl.valueChanges.pipe(startWith(200))
    ]).subscribe(([width, height]) => this.area = {...this.area, width, height});
  }

  uploadAvatar() {
    return (data: UploadImageData) => {
      this.avatar = data;
      return of(null);
    };
  }
}
