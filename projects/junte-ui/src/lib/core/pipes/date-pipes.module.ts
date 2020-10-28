import { NgModule } from '@angular/core';
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

  ]
})
export class DatePipesModule {
}
