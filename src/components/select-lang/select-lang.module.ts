import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'junte-ui';
import { SelectLangComponent } from './select-lang.component';

@NgModule({
  declarations: [
    SelectLangComponent
  ],
  exports: [
    SelectLangComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectModule
  ]
})
export class SelectLangModule {

}
