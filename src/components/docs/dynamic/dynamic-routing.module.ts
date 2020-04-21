import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartTestComponent } from './chart/chart-test.component';
import { CircleBarTestComponent } from './circle-bar/circle-bar-test.component';
import { DatePeriodTestComponent } from './date-period/date-period-test.component';
import { ProgressBarTestComponent } from './progress-bar/progress-bar-test.component';

export const routes: Routes = [
  {
    path: 'progress-bar',
    component: ProgressBarTestComponent,
    data: {breadcrumb: 'Progress bar'}
  },
  {
    path: 'circle-bar',
    component: CircleBarTestComponent,
    data: {breadcrumb: 'Circle bar'}
  },
  {
    path: 'chart',
    component: ChartTestComponent,
    data: {breadcrumb: 'Chart'}
  },
  {
    path: 'date-period',
    component: DatePeriodTestComponent,
    data: {breadcrumb: 'Date period'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicRoutingModule {
}
