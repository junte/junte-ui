import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { ColorPipesModule } from '../../core/pipes/color-pipes.module';
import { IconModule } from '../../elements/icon/icon.module';
import { ChartIndicatorComponent } from './chart-indicator.component';
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

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<ChartModule> {
    return {
      ngModule: ChartModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
