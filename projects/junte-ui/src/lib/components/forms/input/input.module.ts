import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input.component';
import { IconModule } from '../../elements/icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule
  ],
  exports: [
    InputComponent,
  ],
  entryComponents: [
    InputComponent
  ],
  declarations: [
    InputComponent,
  ]
})
export class InputModule {
}
