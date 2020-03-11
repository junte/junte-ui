import { NgModule } from '@angular/core';
import { ElementsRoutingModule } from './elements-routing.module';
import { LabelTestModule } from './label/label-test.module';
import { IconTestModule } from './icon/Icon-test.module';
import { BadgeTestModule } from './badge/badge-test.module';
import { AvatarTestModule } from './avatar/avatar-test.module';
import { DotTestModule } from './dot/dot-test.module';

@NgModule({
  imports: [
    ElementsRoutingModule
  ],
  exports: [
    AvatarTestModule,
    BadgeTestModule,
    IconTestModule,
    LabelTestModule,
    DotTestModule
  ]
})
export class ElementsTestModule {
}
