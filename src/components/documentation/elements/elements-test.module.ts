import { NgModule } from '@angular/core';
import { ElementsRoutingModule } from './elements-routing.module';
import { LabelTestModule } from './label/label-test.module';
import { IconTestModule } from './icon/Icon-test.module';
import { BadgeTestModule } from './badge/badge-test.module';
import { AvatarTestModule } from './avatar/avatar-test.module';

@NgModule({
  imports: [
    ElementsRoutingModule
  ],
  exports: [
    AvatarTestModule,
    BadgeTestModule,
    IconTestModule,
    LabelTestModule
  ]
})
export class ElementsTestModule {
}
