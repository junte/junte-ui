import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SectionModule } from '../shared/section/section.module';
import { ChartTestModule } from './chart/chart-test.module';
import { CircleBarTestModule } from './circle-bar/circle-bar-test.module';
import { DatePeriodTestModule } from './date-period/date-period-test.module';
import { DynamicRoutingModule } from './dynamic-routing.module';
import { DynamicTestComponent } from './dynamic-test.component';
import { ProgressBarTestModule } from './progress-bar/progress-bar-test.module';
import { TimerTestModule } from './timer/timer-test.module';

@NgModule({
  imports: [
    CommonModule,
    DynamicRoutingModule,
    SectionModule
  ],
  exports: [
    ChartTestModule,
    CircleBarTestModule,
    DatePeriodTestModule,
    ProgressBarTestModule,
    TimerTestModule,
    DynamicTestComponent
  ],
  declarations: [
    DynamicTestComponent
  ]
})
export class DynamicTestModule {
}
