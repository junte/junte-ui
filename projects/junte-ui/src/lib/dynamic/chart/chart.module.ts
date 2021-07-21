import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkeletonModule } from '../../layout/skeleton/skeleton.module';
import { ColorPipesModule } from '../../core/pipes/color-pipes.module';
import { IconModule } from '../../elements/icon/icon.module';
import { ChartIndicatorDirective } from './chart-indicator.directive';
import { ChartComponent } from './chart.component';
import { PercentToNumberPipe, SumIndicatorsPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    ColorPipesModule,
    IconModule,
    SkeletonModule
  ],
  exports: [
    ChartComponent,
    ChartIndicatorDirective
  ],
  declarations: [
    ChartComponent,
    ChartIndicatorDirective,
    PercentToNumberPipe,
    SumIndicatorsPipe
  ],
  entryComponents: [
    ChartComponent
  ]
})
export class ChartModule {
}
