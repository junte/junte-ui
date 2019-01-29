import {NgModule} from '@angular/core';
import {JunteUiComponent} from './junte-ui.component';
import {CommonModule} from '@angular/common';
import {SelectComponent} from './select/select.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    JunteUiComponent,
    SelectComponent,
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JunteUiComponent,
    SelectComponent,
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    CardComponent
  ]
})
export class JunteUiModule {
}
