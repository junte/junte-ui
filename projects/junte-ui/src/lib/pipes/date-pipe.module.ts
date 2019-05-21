import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMonthsPipe, FormatPipe, GetDatePipe, GetISOWeekPipe, IsEqualPipe, SubMonthsPipe } from './date-fns.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormatPipe,
    GetISOWeekPipe,
    AddMonthsPipe,
    SubMonthsPipe,
    GetDatePipe,
    IsEqualPipe
  ],
  exports: [
    FormatPipe,
    GetISOWeekPipe,
    AddMonthsPipe,
    SubMonthsPipe,
    GetDatePipe,
    IsEqualPipe
  ]
})
export class DatePipeModule {
}
