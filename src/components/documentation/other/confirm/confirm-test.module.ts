import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfirmModule, StackModule, IconModule, LinkModule, GridModule } from 'junte-ui';
import { ConfirmTestComponent } from './confirm-test.component';

@NgModule({
  imports: [
    CommonModule,
    ConfirmModule,
    StackModule,
    IconModule,
    LinkModule,
    GridModule
  ],
  exports: [
    ConfirmTestComponent
  ],
  declarations: [
    ConfirmTestComponent
  ]
})
export class ConfirmTestModule {
}
