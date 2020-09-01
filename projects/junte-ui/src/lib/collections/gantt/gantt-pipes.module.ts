import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
    BetweenMonthsPipe
  ],
  exports: [
    MonthNamePipe,
    FullMonthPipe,
    DatesInMonthPipe,
    BetweenDaysPipe,
    BetweenMonthsPipe
  ]
})
export class GanttPipesModule {
}
