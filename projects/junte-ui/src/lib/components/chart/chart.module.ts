import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { ChartIndicatorComponent } from './chart-indicator/chart-indicator.component';
import { ConvertionPipeModule } from '../../pipes/convertion-pipe.module';
import { ColorPipeModule } from '../../pipes/color-pipe.module';
import { SumIndicatorsPipe } from './sum-indicator.pipe';
import {IconModule} from '../icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    ConvertionPipeModule,
    ColorPipeModule,
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
