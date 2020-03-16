import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorPickerComponent } from './color-picker.component';
import { FormModule, StackModule, SelectModule, DotModule } from 'junte-ui';


@NgModule({
  declarations: [ColorPickerComponent],
  imports: [
    CommonModule,
    FormModule,
    ReactiveFormsModule,
    StackModule,
    SelectModule,
    DotModule,
    TranslateModule
  ],
  exports: [ColorPickerComponent]
})
export class ColorPickerModule { }
