import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './label.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    LabelComponent
  ],
  declarations: [
    LabelComponent
  ]
})
export class LabelModule {
}
