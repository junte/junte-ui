import { NgModule } from '@angular/core';
import { TitanicIconTestModule } from './titanic-icon/titanic-icon-test.module';
import { ElementsRoutingModule } from './elements-routing.module';
import { LabelTestModule } from './label/label-test.module';
import { IconTestModule } from './icon/icon-test.module';
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
    TitanicIconTestModule,
    LabelTestModule,
    DotTestModule
  ]
})
export class ElementsTestModule {
}
