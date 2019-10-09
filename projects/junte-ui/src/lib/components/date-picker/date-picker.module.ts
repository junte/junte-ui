import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PopoverModule } from '../popover/popover.module';
import { BlockModule } from '../block/block.module';
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
    InputModule,
    CalendarModule,
    BlockModule,
    PopoverModule
  ],
  exports: [
    DatePickerComponent
  ]
})
export class DatePickerModule {
}
