import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DateFnsModule } from 'ngx-date-fns';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { StackModule } from '../../layout/stack/stack.module';
import { DatePeriodComponent } from './date-period.component';

@NgModule({
  declarations: [
    DatePeriodComponent
  ],
  imports: [
    CommonModule,
    StackModule,
    DateFnsModule
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
