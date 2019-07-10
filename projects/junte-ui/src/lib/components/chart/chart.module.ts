import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { StackModule } from '../stack/stack.module';
import { ChartIndicatorComponent } from './chart-indicator/chart-indicator.component';
import { SumPipeModule } from '../../pipes/sum-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    StackModule,
    SumPipeModule
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
