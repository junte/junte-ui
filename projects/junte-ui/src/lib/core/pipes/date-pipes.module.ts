import { NgModule } from '@angular/core';
import { IsThisYearPipe } from './date/is-this-year.pipe';
import { IsThisMonthPipe } from './date/is-this-month.pipe';
import { IsSameMonthPipe } from './date/is-same-month.pipe';
import { IsSameYearPipe } from './date/is-same-year.pipe';
import { IsTodayPipe } from './date/is-today.pipe';
import { IsWeekendPipe } from './date/is-weekend.pipe';
import { MaxPipe } from './date/max.pipe';
import { MinPipe } from './date/min.pipe';
import { WeekdayNamePipe } from './date/weekday-name.pipe';
import { GetDatePipe } from './date/get-date.pipe';
import { GetDaysInMonthPipe } from './date/get-days-in-month.pipe';
import { IsAfterPipe } from './date/is-after.pipe';
import { IsBeforePipe } from './date/is-before.pipe';
import { IsEqualPipe } from './date/is-equal.pipe';
import { EndOfDayPipe } from './date/end-of-day.pipe';
import { EndOfMonthPipe } from './date/end-of-month.pipe';
import { EndOfWeekPipe } from './date/end-of-week.pipe';
import { EndOfYearPipe } from './date/end-of-year.pipe';
import { StartOfDayPipe } from './date/start-of-day.pipe';
import { StartOfMonthPipe } from './date/start-of-month.pipe';
import { StartOfWeekPipe } from './date/start-of-week.pipe';
import { StartOfYearPipe } from './date/start-of-year.pipe';
import { DifferenceInCalendarDaysPipe } from './date/difference-in-calendar-days.pipe';
import { FormatPipe } from './date/format.pipe';


@NgModule({
  declarations: [
    FormatPipe,
    DifferenceInCalendarDaysPipe,
    StartOfDayPipe,
    StartOfMonthPipe,
    StartOfYearPipe,
    StartOfWeekPipe,
    EndOfDayPipe,
    EndOfMonthPipe,
    EndOfYearPipe,
    EndOfWeekPipe,
    GetDaysInMonthPipe,
    GetDatePipe,
    IsAfterPipe,
    IsBeforePipe,
    IsEqualPipe,
    IsSameMonthPipe,
    IsSameYearPipe,
    IsTodayPipe,
    IsWeekendPipe,
    MaxPipe,
    MinPipe,
    WeekdayNamePipe,
    IsThisMonthPipe,
    IsThisYearPipe
  ],
  exports: [
    FormatPipe,
    DifferenceInCalendarDaysPipe,
    StartOfDayPipe,
    StartOfMonthPipe,
    StartOfYearPipe,
    StartOfWeekPipe,
    EndOfDayPipe,
    EndOfMonthPipe,
    EndOfYearPipe,
    EndOfWeekPipe,
    GetDaysInMonthPipe,
    GetDatePipe,
    IsAfterPipe,
    IsBeforePipe,
    IsEqualPipe,
    IsSameMonthPipe,
    IsSameYearPipe,
    IsTodayPipe,
    IsWeekendPipe,
    MaxPipe,
    MinPipe,
    WeekdayNamePipe,
    IsThisMonthPipe,
    IsThisYearPipe
  ]
})
export class DatePipesModule {
}
