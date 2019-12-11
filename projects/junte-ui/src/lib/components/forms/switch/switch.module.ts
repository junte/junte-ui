import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '../../elements/icon/icon.module';
import { SwitchComponent } from './switch.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    SwitchComponent
  ],
  declarations: [
    SwitchComponent
  ]
})
export class SwitchModule {
}
