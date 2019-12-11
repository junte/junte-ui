import { NgModule } from '@angular/core';
import { AvatarModule } from './avatar/avatar.module';
import { BadgeModule } from './badge/badge.module';
import { IconModule } from './icon/icon.module';
import { LabelModule } from './label/label.module';

@NgModule({
  exports: [
    AvatarModule,
    BadgeModule,
    IconModule,
    LabelModule
  ]
})
export class ElementsModule {
}
