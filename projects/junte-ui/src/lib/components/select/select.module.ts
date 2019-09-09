import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JunteDirectiveModule } from '../../directives/junte-directive.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { IconModule } from '../icon/icon.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { SelectOptionComponent } from './select-option/select-option.component';
import { SelectComponent } from './select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    IconModule,
    SpinnerModule,
    JunteDirectiveModule
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
