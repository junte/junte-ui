import { NgModule } from '@angular/core';
import { ChartModule } from './chart/chart.module';
import { CircleBarModule } from './circle-bar/circle-bar.module';
import { DatePeriodModule } from './date-period/date-period.module';
import { ProgressBarModule } from './progress-bar/progress-bar.module';
import { TimerModule } from './timer/timer.module';

@NgModule({
  exports: [
    ChartModule,
    CircleBarModule,
    DatePeriodModule,
    ProgressBarModule,
    TimerModule
  ]
})
export class DynamicModule {
}
