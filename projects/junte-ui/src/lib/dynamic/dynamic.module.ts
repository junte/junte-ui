import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../config';
import { ChartModule } from './chart/chart.module';
import { CircleBarModule } from './circle-bar/circle-bar.module';
import { DatePeriodModule } from './date-period/date-period.module';
import { ProgressBarModule } from './progress-bar/progress-bar.module';
import { TimerModule } from './timer/timer.module';

@NgModule({
  exports: [
    ChartModule,
    CircleBarModule,
    DatePeriodModule,
    ProgressBarModule,
    TimerModule
  ]
})
export class DynamicModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<DynamicModule> {
    return {
      ngModule: DynamicModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
