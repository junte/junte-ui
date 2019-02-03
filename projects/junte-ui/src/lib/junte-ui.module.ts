import {NgModule} from '@angular/core';
import {JunteUiComponent} from './junte-ui.component';
import {CommonModule} from '@angular/common';
import {SelectComponent} from './select/select.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { CardComponent } from './card/card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContainerComponent } from './grid/container/container.component';
import { RowComponent } from './grid/row/row.component';
import { ColComponent } from './grid/col/col.component';
import { IconComponent } from './icon/icon.component';
import {StackDirective} from './directives/stack';
import {StackComponent} from './grid/stack/stack.component';

@NgModule({
  declarations: [
    JunteUiComponent,
    SelectComponent,
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    CardComponent,
    ContainerComponent,
    RowComponent,
    ColComponent,
    IconComponent,
    StackDirective,
    StackComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    JunteUiComponent,
    SelectComponent,
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    CardComponent,
    ContainerComponent,
    RowComponent,
    ColComponent,
    IconComponent,
    StackDirective,
    StackComponent
  ]
})
export class JunteUiModule {
}
