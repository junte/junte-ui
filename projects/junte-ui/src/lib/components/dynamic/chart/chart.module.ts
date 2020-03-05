import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../../config';
import { ColorPipeModule } from '../../../pipes/color.pipe.module';
import { ConvertionPipeModule } from '../../../pipes/convertion.pipe.module';
import { IsEqualPipeModule } from '../../../pipes/is-equal.pipe.module';
import { IconModule } from '../../elements/icon/icon.module';
import { ChartIndicatorComponent } from './chart-indicator/chart-indicator.component';
import { ChartComponent } from './chart.component';
import { SumIndicatorsPipe } from './sum-indicator.pipe';

@NgModule({
  imports: [
    CommonModule,
    ConvertionPipeModule,
    ColorPipeModule,
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
