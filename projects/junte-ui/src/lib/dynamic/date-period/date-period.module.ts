import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { DatePipesModule } from '../../core/pipes/date-pipes.module';
import { StackModule } from '../../layout/stack/stack.module';
import { DatePeriodComponent } from './date-period.component';


@NgModule({
  declarations: [
    DatePeriodComponent
  ],
  imports: [
    CommonModule,
    StackModule,
    DatePipesModule
  ],
  exports: [
    DatePeriodComponent
  ]
})
export class DatePeriodModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<DatePeriodModule> {
    return {
      ngModule: DatePeriodModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
