import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArrayPipeModule } from '../../pipes/array-pipe.module';
import { DatePipeModule } from '../../pipes/date-pipe.module';
import { CardModule } from '../card/card.module';
import { IconModule } from '../icon/icon.module';
import { SkeletonModule } from '../skeleton/skeleton.module';
import { MonthGanttLineComponent } from './month-gantt-line/month-gantt-line.component';
import { MonthGanttComponent } from './month-gantt.component';
import { AfterPipe, BeforePipe, DateDiffPipe, DiffDayPipe, FullMonthPipe, RemnantDayPipe, SamePipe, StatusPipe } from './month-gantt.pipes';

@NgModule({
  declarations: [
    MonthGanttComponent,
    MonthGanttLineComponent,
    FullMonthPipe,
    BeforePipe,
    AfterPipe,
    StatusPipe,
    DiffDayPipe,
    RemnantDayPipe,
    DateDiffPipe,
    SamePipe
  ],
  imports: [
    CommonModule,
    DatePipeModule,
    ArrayPipeModule,
    CardModule,
    IconModule,
    SkeletonModule
  ],
  exports: [
    MonthGanttComponent,
    MonthGanttLineComponent,
    FullMonthPipe,
    BeforePipe,
    AfterPipe,
    StatusPipe,
    DiffDayPipe,
    RemnantDayPipe,
    DateDiffPipe,
    SamePipe
  ]
})
export class MonthGanttModule {
}
