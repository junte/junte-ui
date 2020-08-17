import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DatesInPeriodPipe } from './gantt-pipes/dates-in-period.pipe';
import { DatesInYearPeriodPipe } from './gantt-pipes/dates-in-year-period.pipe';
import { MonthNamePipe } from './gantt-pipes/month-name.pipe';
import { AfterPipe } from './gantt-pipes/after.pipe';
import { BeforePipe } from './gantt-pipes/before.pipe';
import { FullMonthPipe } from './gantt-pipes/full-month.pipe';
import { DatesInMonthPipe } from './gantt-pipes/dates-in-month.pipe';
import { YearAfterPipe } from './gantt-pipes/year-after.pipe';
import { YearBeforePipe } from './gantt-pipes/year-before.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AfterPipe,
    BeforePipe,
    FullMonthPipe,
    MonthNamePipe,
    DatesInMonthPipe,
    DatesInPeriodPipe,
    DatesInYearPeriodPipe,
    YearAfterPipe,
    YearBeforePipe
  ],
  exports: [
    AfterPipe,
    BeforePipe,
    FullMonthPipe,
    MonthNamePipe,
    DatesInMonthPipe,
    DatesInPeriodPipe,
    DatesInYearPeriodPipe,
    YearAfterPipe,
    YearBeforePipe
  ]
})
export class GanttPipesModule {
}
