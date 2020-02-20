import { ModuleWithProviders, NgModule } from '@angular/core';
import { ChartModule } from './chart/chart.module';
import { CircleBarModule } from './circle-bar/circle-bar.module';
import { DatePeriodModule } from './date-period/date-period.module';
import { ProgressBarModule } from './progress-bar/progress-bar.module';
import { JunteUIModuleConfig } from '../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../i18n/loader';
import { en } from '../../i18n/en';

@NgModule({
  exports: [
    ChartModule,
    CircleBarModule,
    DatePeriodModule,
    ProgressBarModule
  ]
})
export class DynamicModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<DynamicModule> {
    return {
      ngModule: DynamicModule,
      providers: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useValue: new I18nLoader(config.i18n || en)
          },
          defaultLanguage: 'en'
        }).providers]
    };
  }

}
