import { NgModule } from '@angular/core';
import { GetYearPipe } from './date/get-year.pipe';
import { AddMonthsPipe } from './date/add-months.pipe';
import { AddYearsPipe } from './date/add-years.pipe';
import { DifferenceInCalendarDaysPipe } from './date/difference-in-calendar-days.pipe';
import { EndOfDayPipe } from './date/end-of-day.pipe';
import { EndOfMonthPipe } from './date/end-of-month.pipe';
import { EndOfWeekPipe } from './date/end-of-week.pipe';
import { EndOfYearPipe } from './date/end-of-year.pipe';
import { FormatPipe } from './date/format.pipe';
import { GetDatePipe } from './date/get-date.pipe';
import { GetDaysInMonthPipe } from './date/get-days-in-month.pipe';
import { IsAfterPipe } from './date/is-after.pipe';
import { IsBeforePipe } from './date/is-before.pipe';
import { IsEqualPipe } from './date/is-equal.pipe';
import { IsSameMonthPipe } from './date/is-same-month.pipe';
import { IsSameYearPipe } from './date/is-same-year.pipe';
import { IsThisMonthPipe } from './date/is-this-month.pipe';
import { IsThisYearPipe } from './date/is-this-year.pipe';
import { IsTodayPipe } from './date/is-today.pipe';
import { IsWeekendPipe } from './date/is-weekend.pipe';
import { MaxPipe } from './date/max.pipe';
import { MinPipe } from './date/min.pipe';
import { StartOfDayPipe } from './date/start-of-day.pipe';
import { StartOfMonthPipe } from './date/start-of-month.pipe';
import { StartOfWeekPipe } from './date/start-of-week.pipe';
import { StartOfYearPipe } from './date/start-of-year.pipe';
import { SubMonthsPipe } from './date/sub-months.pipe';
import { SubYearsPipe } from './date/sub-years.pipe';
import { WeekdayNamePipe } from './date/weekday-name.pipe';


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
    IsThisYearPipe,
    AddMonthsPipe,
    SubMonthsPipe,
    AddYearsPipe,
    SubYearsPipe,
    GetYearPipe
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
    IsThisYearPipe,
    AddMonthsPipe,
    SubMonthsPipe,
    AddYearsPipe,
    SubYearsPipe,
    GetYearPipe
  ]
})
export class DatePipesModule {
}
