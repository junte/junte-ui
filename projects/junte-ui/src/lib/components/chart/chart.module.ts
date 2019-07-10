import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { StackModule } from '../stack/stack.module';
import { ChartIndicatorComponent } from './chart-indicator/chart-indicator.component';

@NgModule({
  imports: [
    CommonModule,
    StackModule
  ],
  exports: [
    ChartComponent,
    ChartIndicatorComponent
  ],
  declarations: [
    ChartComponent,
    ChartIndicatorComponent
  ]
})
export class ChartModule {
}
