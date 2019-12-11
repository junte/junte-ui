import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DatePipeModule } from '../../../pipes/date-pipe.module';
import { StackModule } from '../../layout/stack/stack.module';
import { IconModule } from '../../elements/icon/icon.module';
import { CalendarComponent } from './calendar.component';
import { DayComponent } from './week/day/day.component';
import { WeekMetricComponent } from './week/week-metric.component';
import { WeekComponent } from './week/week.component';

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
