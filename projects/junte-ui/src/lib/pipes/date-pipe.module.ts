import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  AddMonthsPipe,
  AddDaysPipe,
  DatesInMonthPipe,
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
  IsWeekendPipe,
  RemnantDayPipe,
  SamePipe,
  SetDatePipe,
  SubMonthsPipe,
  StartOfDayPipe,
  IsTodayPipe
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
    SamePipe,
    IsWeekendPipe,
    SetDatePipe,
    AddDaysPipe,
    DatesInMonthPipe,
    StartOfDayPipe,
    IsTodayPipe
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
    SamePipe,
    IsWeekendPipe,
    SetDatePipe,
    AddDaysPipe,
    DatesInMonthPipe,
    StartOfDayPipe,
    IsTodayPipe
  ]
})
export class DatePipeModule {
}
