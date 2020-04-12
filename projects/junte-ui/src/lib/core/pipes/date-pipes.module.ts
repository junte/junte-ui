import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  AfterPipe,
  BeforePipe,
  DateDiffPipe,
  DatesInMonthPipe,
  FullMonthPipe,
  IsEqualDatePipe,
  IsSameMonthPipe,
  IsTodayPipe,
  IsWeekendPipe,
  RemnantDayPipe
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
export class DatePipesModule {
}
