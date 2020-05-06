import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DotModule, FormModule, SelectModule, StackModule } from 'junte-ui';
import { ColorPickerComponent } from './color-picker.component';


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
export class ColorPickerModule {
}
