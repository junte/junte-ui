import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColorPipesModule } from '../../core/pipes/color-pipes.module';
import { IconModule } from '../../elements/icon/icon.module';
import { ChartIndicatorComponent } from './chart-indicator';
import { ChartComponent } from './chart.component';
import { PercentToNumberPipe, SumIndicatorsPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    ColorPipesModule,
    IconModule
  ],
  exports: [
    ChartComponent,
    ChartIndicatorComponent
  ],
  declarations: [
    ChartComponent,
    ChartIndicatorComponent,
    PercentToNumberPipe,
    SumIndicatorsPipe
  ],
  entryComponents: [
    ChartComponent,
    ChartIndicatorComponent
  ]
})
export class ChartModule {
}
