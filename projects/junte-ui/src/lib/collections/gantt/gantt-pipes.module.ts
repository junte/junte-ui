import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IsSameDayPipe } from './gantt-pipes/is-same-day.pipe';
import { IsWithinIntervalPipe } from './gantt-pipes/is-within-interval.pipe';
import { BetweenMonthsPipe } from './gantt-pipes/between-months.pipe';
import { BetweenDaysPipe } from './gantt-pipes/between-days.pipe';
import { DatesInMonthPipe } from './gantt-pipes/dates-in-month.pipe';
import { FullMonthPipe } from './gantt-pipes/full-month.pipe';
import { MonthNamePipe } from './gantt-pipes/month-name.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MonthNamePipe,
    FullMonthPipe,
    DatesInMonthPipe,
    BetweenDaysPipe,
    BetweenMonthsPipe,
    IsWithinIntervalPipe,
    IsSameDayPipe
  ],
  exports: [
    MonthNamePipe,
    FullMonthPipe,
    DatesInMonthPipe,
    BetweenDaysPipe,
    BetweenMonthsPipe,
    IsWithinIntervalPipe,
    IsSameDayPipe
  ]
})
export class GanttPipesModule {
}
