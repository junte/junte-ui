import { NgModule } from '@angular/core';
import { PictureTestModule } from './picture/picture-test.module';
import { AvatarTestModule } from './avatar/avatar-test.module';
import { BadgeTestModule } from './badge/badge-test.module';
import { DotTestModule } from './dot/dot-test.module';
import { ElementsRoutingModule } from './elements-routing.module';
import { IconTestModule } from './icon/icon-test.module';
import { ImageCropperTestModule } from './image-cropper/image-cropper-test.module';
import { LabelTestModule } from './label/label-test.module';

@NgModule({
  imports: [
    ElementsRoutingModule
  ],
  exports: [
    AvatarTestModule,
    BadgeTestModule,
    IconTestModule,
    LabelTestModule,
    DotTestModule,
    PictureTestModule,
    ImageCropperTestModule
  ]
})
export class ElementsTestModule {
}
