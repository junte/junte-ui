import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoaderFactory, JunteUIModuleConfig } from '../../../config';
import { en } from '../../../i18n/en';
import { DatePipeModule } from '../../../pipes/date.pipe.module';
import { StackModule } from '../../layout/stack/stack.module';
import { DatePeriodComponent } from './date-period.component';


@NgModule({
  declarations: [
    DatePeriodComponent
  ],
  imports: [
    CommonModule,
    StackModule,
    DatePipeModule
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
        },
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: I18nLoaderFactory,
            deps: [JunteUIModuleConfig]
          },
          defaultLanguage: 'en'
        }).providers
      ]
    };
  }

}
