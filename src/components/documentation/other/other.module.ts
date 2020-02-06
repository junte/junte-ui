import { NgModule } from '@angular/core';
import { OtherRoutingModule } from './other-routing.module';
import { PipesTestModule } from './pipes/pipes-test.module';
import { ConfirmTestModule } from './confirm/confirm-test.module';

@NgModule({
  imports: [
    OtherRoutingModule
  ],
  exports: [
    ConfirmTestModule,
    PipesTestModule
  ]
})
export class OtherModule {
}
