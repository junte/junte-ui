import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './select.component';
import { SelectOptionComponent } from './select-option/select-option.component';
import { IconModule } from '../icon/icon.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { CheckboxModule } from '../checkbox/checkbox.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    IconModule,
    SpinnerModule
  ],
  exports: [
    SelectComponent,
    SelectOptionComponent
  ],
  declarations: [
    SelectComponent,
    SelectOptionComponent
  ]
})
export class SelectModule {
}
