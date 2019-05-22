import { NgModule } from '@angular/core';
import { CalendarComponent } from './calendar.component';
import { WeekComponent } from './week/week.component';
import { DayComponent } from './week/day/day.component';
import { WeekMetricComponent } from './week/week-metric.component';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icon/icon.module';
import { DatePipeModule } from '../../pipes/date-pipe.module';
import { StackModule } from '../stack/stack.module';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    DatePipeModule,
    StackModule
  ],
  declarations: [
    CalendarComponent,
    WeekComponent,
    DayComponent,
    WeekMetricComponent
  ],
  exports: [
    CalendarComponent,
    WeekComponent,
    DayComponent,
    WeekMetricComponent
  ]
})
export class CalendarModule {
}
