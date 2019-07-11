import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { StackModule } from '../stack/stack.module';
import { ChartIndicatorComponent } from './chart-indicator/chart-indicator.component';
import { ConvertionPipeModule } from '../../pipes/convertion-pipe.module';
import { ColorPipeModule } from '../../pipes/color-pipe.module';
import { SumIndicatorsPipe } from './sum-indicator.pipe';

@NgModule({
  imports: [
    CommonModule,
    StackModule,
    ConvertionPipeModule,
    ColorPipeModule
  ],
  exports: [
    ChartComponent,
    ChartIndicatorComponent
  ],
  declarations: [
    ChartComponent,
    ChartIndicatorComponent,
    SumIndicatorsPipe
  ]
})
export class ChartModule {
}
