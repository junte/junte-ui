import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppLayoutModule, GridModule } from 'junte-ui';
import { CarouselTestModule } from 'src/components/handbook/dynamic/carousel/carousel-test.module';
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
    SectionModule,
    AppLayoutModule,
    GridModule
  ],
  exports: [
    ChartTestModule,
    CircleBarTestModule,
    DatePeriodTestModule,
    ProgressBarTestModule,
    TimerTestModule,
    CarouselTestModule,
    DynamicTestComponent
  ],
  declarations: [
    DynamicTestComponent
  ]
})
export class DynamicTestModule {
}
