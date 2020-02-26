import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StackModule, IconModule, LinkModule, GridModule, TabsModule, ButtonModule, PopoverModule, InputModule } from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { PopoverTestComponent } from './popover-test.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StackModule,
    IconModule,
    LinkModule,
    GridModule,
    TabsModule,
    ButtonModule,
    PopoverModule,
    InputModule,
    SharedModule
  ],
  exports: [
    PopoverTestComponent
  ],
  declarations: [
    PopoverTestComponent
  ]
})
export class PopoverTestModule {
}
