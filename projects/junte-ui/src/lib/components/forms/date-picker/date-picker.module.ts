import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DateFnsModule } from 'ngx-date-fns';
import { BlockModule } from '../../layout/block/block.module';
import { PopoverModule } from '../../overlays/popover/popover.module';
import { CalendarModule } from '../calendar/calendar.module';
import { FormModule } from '../form/form.module';
import { InputModule } from '../input/input.module';
import { DatePickerComponent } from './date-picker.component';


@NgModule({
  declarations: [
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormModule,
    DateFnsModule,
    InputModule,
    CalendarModule,
    BlockModule,
    PopoverModule
  ],
  entryComponents: [
    DatePickerComponent
  ],
  exports: [
    DatePickerComponent
  ]
})
export class DatePickerModule {
}
