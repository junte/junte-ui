import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input.component';
import { IconModule } from '../../ui-elements/icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IconModule
  ],
  exports: [
    InputComponent,
  ],
  declarations: [
    InputComponent,
  ]
})
export class InputModule {
}
