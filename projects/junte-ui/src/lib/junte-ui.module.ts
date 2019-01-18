import {NgModule} from '@angular/core';
import {JunteUiComponent} from './junte-ui.component';
import {CommonModule} from '@angular/common';
import {SelectComponent} from './select/select.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    JunteUiComponent,
    SelectComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JunteUiComponent,
    SelectComponent,
    ButtonComponent
  ]
})
export class JunteUiModule {
}
