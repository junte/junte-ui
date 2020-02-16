import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColorPipesModule } from '../../../pipes/color-pipes.module';
import { ConvertionPipeModule } from '../../../pipes/convertion-pipe.module';
import { IsEqualPipeModule } from '../../../pipes/is-equal.module';
import { IconModule } from '../../elements/icon/icon.module';
import { ChartIndicatorComponent } from './chart-indicator/chart-indicator.component';
import { ChartComponent } from './chart.component';
import { SumIndicatorsPipe } from './sum-indicator.pipe';

@NgModule({
  imports: [
    CommonModule,
    ConvertionPipeModule,
    ColorPipesModule,
    IsEqualPipeModule,
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
