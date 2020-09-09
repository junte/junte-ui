import { NgModule } from '@angular/core';
import { AvatarModule } from './avatar/avatar.module';
import { BadgeModule } from './badge/badge.module';
import { DotModule } from './dot/dot.module';
import { IconModule } from './icon/icon.module';
import { LabelModule } from './label/label.module';
import { PictureModule } from './picture/picture.module';

@NgModule({
  exports: [
    AvatarModule,
    BadgeModule,
    IconModule,
    LabelModule,
    DotModule,
    PictureModule
  ]
})
export class ElementsModule {
}
