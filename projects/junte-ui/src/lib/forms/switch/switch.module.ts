import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '../../elements/icon/icon.module';
import { StackModule } from '../../layout/stack/stack.module';
import { SwitchComponent } from './switch.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    ReactiveFormsModule,
    StackModule
  ],
  exports: [
    SwitchComponent
  ],
  entryComponents: [
    SwitchComponent
  ],
  declarations: [
    SwitchComponent
  ]
})
export class SwitchModule {
}
