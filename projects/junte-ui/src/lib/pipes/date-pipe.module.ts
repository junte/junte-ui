import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  AddMonthsPipe,
  AfterPipe,
  BeforePipe,
  DateDiffPipe,
  DiffDayPipe,
  FormatPipe,
  FullMonthPipe,
  GetDatePipe,
  GetDaysInMonthPipe,
  GetISOWeekPipe,
  IsEqualDatePipe,
  IsSameMonthPipe,
  RemnantDayPipe,
  SamePipe,
  SubMonthsPipe
} from './date-fns.pipe';

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
    IsEqualDatePipe,
    IsSameMonthPipe,
    GetDaysInMonthPipe,
    AfterPipe,
    BeforePipe,
    DateDiffPipe,
    DiffDayPipe,
    FullMonthPipe,
    RemnantDayPipe,
    SamePipe
  ],
  exports: [
    FormatPipe,
    GetISOWeekPipe,
    AddMonthsPipe,
    SubMonthsPipe,
    GetDatePipe,
    IsEqualDatePipe,
    IsSameMonthPipe,
    GetDaysInMonthPipe,
    AfterPipe,
    BeforePipe,
    DateDiffPipe,
    DiffDayPipe,
    FullMonthPipe,
    RemnantDayPipe,
    SamePipe
  ]
})
export class DatePipeModule {
}
