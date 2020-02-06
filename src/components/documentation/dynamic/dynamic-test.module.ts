import { NgModule } from '@angular/core';
import { DynamicRoutingModule } from './dynamic-routing.module';
import { ProgressBarTestModule } from './progress-bar/progress-bar-test.module';
import { DatePeriodTestModule } from './date-period/date-period-test.module';
import { CircleBarTestModule } from './circle-bar/circle-bar-test.module';
import { ChartTestModule } from './chart/chart-test.module';

@NgModule({
  imports: [
    DynamicRoutingModule
  ],
  exports: [
    ChartTestModule,
    CircleBarTestModule,
    DatePeriodTestModule,
    ProgressBarTestModule
  ]
})
export class DynamicTestModule {
}
