import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SectionModule } from 'src/components/handbook/shared/section/section.module';
import { AvatarTestModule } from './avatar/avatar-test.module';
import { BadgeTestModule } from './badge/badge-test.module';
import { DotTestModule } from './dot/dot-test.module';
import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsTestComponent } from './elements-test.component';
import { IconTestModule } from './icon/icon-test.module';
import { LabelTestModule } from './label/label-test.module';
import { PictureTestModule } from './picture/picture-test.module';

@NgModule({
  declarations: [
    ElementsTestComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SectionModule
  ],
  exports: [
    AvatarTestModule,
    BadgeTestModule,
    IconTestModule,
    LabelTestModule,
    DotTestModule,
    PictureTestModule,
    ElementsTestComponent
  ]
})
export class ElementsTestModule {
}
