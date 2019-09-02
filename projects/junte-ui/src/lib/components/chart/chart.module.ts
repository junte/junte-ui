import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColorPipeModule } from '../../pipes/color-pipe.module';
import { ConvertionPipeModule } from '../../pipes/convertion-pipe.module';
import { IsEqualModule } from '../../pipes/is-equal.module';
import { IconModule } from '../icon/icon.module';
import { ChartIndicatorComponent } from './chart-indicator/chart-indicator.component';
import { ChartComponent } from './chart.component';
import { SumIndicatorsPipe } from './sum-indicator.pipe';

@NgModule({
  imports: [
    CommonModule,
    ConvertionPipeModule,
    ColorPipeModule,
    IsEqualModule,
    IconModule
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
