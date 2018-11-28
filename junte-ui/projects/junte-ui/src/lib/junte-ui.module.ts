import {NgModule} from '@angular/core';
import {JunteUiComponent} from './junte-ui.component';
import {CommonModule} from '@angular/common';
import {SelectComponent} from './select/select.component';

@NgModule({
  declarations: [
    JunteUiComponent,
    SelectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JunteUiComponent,
    SelectComponent
  ]
})
export class JunteUiModule {
}
