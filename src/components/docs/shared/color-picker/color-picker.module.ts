import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '../../../../../projects/junte-ui/src/lib/forms/form/form.module';
import { ColorPickerComponent } from './color-picker.component';
import { StackModule } from '../../../../../projects/junte-ui/src/lib/layout/stack/stack.module';
import { SelectModule } from '../../../../../projects/junte-ui/src/lib/forms/select/select.module';
import { DotModule } from '../../../../../projects/junte-ui/src/lib/forms/dot/dot.module';


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
