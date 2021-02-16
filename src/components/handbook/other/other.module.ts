import { NgModule } from '@angular/core';
import { EmptyTestModule } from './empty/empty-test.module';
import { AnimationsTestModule } from './animations/animations-test.module';
import { ShortcutsTestModule } from './shortcuts/shortcuts-test.module';
import { ConfirmTestModule } from './confirm/confirm-test.module';
import { MessageTestModule } from './message/message-test.module';
import { OtherRoutingModule } from './other-routing.module';
import { PipesTestModule } from './pipes/pipes-test.module';

@NgModule({
  imports: [
    OtherRoutingModule
  ],
  exports: [
    ConfirmTestModule,
    PipesTestModule,
    MessageTestModule,
    EmptyTestModule,
    ShortcutsTestModule,
    AnimationsTestModule
  ]
})
export class OtherModule {
}
