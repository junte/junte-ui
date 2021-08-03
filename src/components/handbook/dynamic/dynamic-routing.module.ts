import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselTestComponent } from 'src/components/handbook/dynamic/carousel/carousel-test.component';
import { ChartTestComponent } from './chart/chart-test.component';
import { CircleBarTestComponent } from './circle-bar/circle-bar-test.component';
import { DatePeriodTestComponent } from './date-period/date-period-test.component';
import { DynamicTestComponent } from './dynamic-test.component';
import { ProgressBarTestComponent } from './progress-bar/progress-bar-test.component';
import { TimerTestComponent } from './timer/timer-test.component';

export const routes: Routes = [
  {
    path: '',
    data: {breadcrumb: 'Dynamic'},
    children: [
      {
        path: '',
        component: DynamicTestComponent
      },
      {
        path: 'progress-bar',
        component: ProgressBarTestComponent,
        data: {breadcrumb: 'Progress bar', animation: 'Progress bar'}
      },
      {
        path: 'circle-bar',
        component: CircleBarTestComponent,
        data: {breadcrumb: 'Circle bar', animation: 'Circle bar'}
      },
      {
        path: 'chart',
        component: ChartTestComponent,
        data: {breadcrumb: 'Chart', animation: 'Chart'}
      },
      {
        path: 'date-period',
        component: DatePeriodTestComponent,
        data: {breadcrumb: 'Date period', animation: 'Date period'}
      },
      {
        path: 'timer',
        component: TimerTestComponent,
        data: {breadcrumb: 'Timer', animation: 'Timer'}
      },
      {
        path: 'carousel',
        component: CarouselTestComponent,
        data: {breadcrumb: 'Carousel', animation: 'Carousel'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicRoutingModule {
}
