import { NgModule } from '@angular/core';
import { DynamicRoutingModule } from './dynamic-routing.module';
import { ProgressBarTestModule } from './progress-bar/progress-bar-test.module';
import { DatePeriodTestModule } from './date-period/date-period-test.module';
import { CircleBarTestModule } from './circle-bar/circle-bar-test.module';
import { ChartTestModule } from './chart/chart-test.module';
import { TimerTestModule } from './timer/timer-test.module';

@NgModule({
  imports: [
    DynamicRoutingModule
  ],
  exports: [
    ChartTestModule,
    CircleBarTestModule,
    DatePeriodTestModule,
    ProgressBarTestModule,
    TimerTestModule
  ]
})
export class DynamicTestModule {
}
