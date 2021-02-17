import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SectionModule } from '../shared/section/section.module';
import { AnimationsTestModule } from './animations/animations-test.module';
import { ConfirmTestModule } from './confirm/confirm-test.module';
import { EmptyTestModule } from './empty/empty-test.module';
import { MessageTestModule } from './message/message-test.module';
import { OtherRoutingModule } from './other-routing.module';
import { OtherTestComponent } from './other-test.component';
import { PipesTestModule } from './pipes/pipes-test.module';
import { ShortcutsTestModule } from './shortcuts/shortcuts-test.module';

@NgModule({
  declarations: [
    OtherTestComponent
  ],
  imports: [
    CommonModule,
    OtherRoutingModule,
    SectionModule
  ],
  exports: [
    ConfirmTestModule,
    PipesTestModule,
    MessageTestModule,
    EmptyTestModule,
    ShortcutsTestModule,
    AnimationsTestModule,
    OtherTestComponent
  ]
})
export class OtherTestModule {
}
