import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JunteUiModule } from 'junte-ui';
import { DateFnsModule } from 'ngx-date-fns';
import { SharedModule } from 'src/components/documentation/shared/shared.module';

import { DatePickerTestComponent } from './date-picker-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DateFnsModule,
    JunteUiModule,
    SharedModule
  ],
  exports: [DatePickerTestComponent],
  declarations: [DatePickerTestComponent],
})
export class DatePickerTestModule {
}
