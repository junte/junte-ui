import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  DatesInMonthPipe,
  AfterPipe,
  BeforePipe,
  DateDiffPipe,
  FullMonthPipe,
  IsEqualDatePipe,
  IsSameMonthPipe,
  IsWeekendPipe,
  RemnantDayPipe,
  IsTodayPipe
} from './date.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IsEqualDatePipe,
    IsSameMonthPipe,
    AfterPipe,
    BeforePipe,
    DateDiffPipe,
    FullMonthPipe,
    RemnantDayPipe,
    IsWeekendPipe,
    DatesInMonthPipe,
    IsTodayPipe
  ],
  exports: [
    IsEqualDatePipe,
    IsSameMonthPipe,
    AfterPipe,
    BeforePipe,
    DateDiffPipe,
    FullMonthPipe,
    RemnantDayPipe,
    IsWeekendPipe,
    DatesInMonthPipe,
    IsTodayPipe
  ]
})
export class DatePipeModule {
}
