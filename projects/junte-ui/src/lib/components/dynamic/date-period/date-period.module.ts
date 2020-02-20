import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DatePipeModule } from '../../../pipes/date-pipe.module';
import { StackModule } from '../../layout/stack/stack.module';
import { DatePeriodComponent } from './date-period.component';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';


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
