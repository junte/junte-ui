import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArrayPipeModule } from '../../pipes/array-pipe.module';
import { DatePipeModule } from '../../pipes/date-pipe.module';
import { ButtonModule } from '../button/button.module';
import { CardModule } from '../card/card.module';
import { IconModule } from '../icon/icon.module';
import { SkeletonModule } from '../skeleton/skeleton.module';
import { GanttLineComponent } from './gantt-line/gantt-line.component';
import { GanttComponent } from './gantt.component';
import {
  AfterPipe,
  BeforePipe,
  DateDiffPipe,
  DiffDayPipe,
  FullMonthPipe,
  GetDaysInMonthPipe,
  IsSameMonthPipe,
  RemnantDayPipe,
  SamePipe,
  StatusPipe
} from './gantt.pipes';

@NgModule({
  declarations: [
    GanttComponent,
    GanttLineComponent,
    FullMonthPipe,
    BeforePipe,
    AfterPipe,
    StatusPipe,
    DiffDayPipe,
    RemnantDayPipe,
    DateDiffPipe,
    GetDaysInMonthPipe,
    IsSameMonthPipe,
    SamePipe
  ],
  imports: [
    CommonModule,
    DatePipeModule,
    ArrayPipeModule,
    CardModule,
    IconModule,
    SkeletonModule,
    ButtonModule
  ],
  exports: [
    GanttComponent,
    GanttLineComponent,
    FullMonthPipe,
    BeforePipe,
    AfterPipe,
    StatusPipe,
    DiffDayPipe,
    RemnantDayPipe,
    DateDiffPipe,
    GetDaysInMonthPipe,
    IsSameMonthPipe,
    SamePipe
  ]
})
export class GanttModule {
}
