import {NgModule} from '@angular/core';
import {JunteUiComponent} from './junte-ui.component';
import {CommonModule} from '@angular/common';
import {SelectComponent} from './select/select.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [
    JunteUiComponent,
    SelectComponent,
    ButtonComponent,
    InputComponent,
    CheckboxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JunteUiComponent,
    SelectComponent,
    ButtonComponent,
    InputComponent,
    CheckboxComponent
  ]
})
export class JunteUiModule {
}
