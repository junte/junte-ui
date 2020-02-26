import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { enUS as dfnsEnUS } from "date-fns/locale";
import { DateFnsConfigurationService, DateFnsModule } from 'ngx-date-fns';
import { I18nLoaderFactory, JunteUIModuleConfig } from '../../../config';
import { DatePipeModule } from '../../../pipes/date.pipe.module';
import { IconModule } from '../../elements/icon/icon.module';
import { StackModule } from '../../layout/stack/stack.module';
import { CalendarComponent } from './calendar.component';
import { DayComponent } from './week/day/day.component';
import { WeekMetricComponent } from './week/week-metric.component';
import { WeekComponent } from './week/week.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IconModule,
    DatePipeModule,
    StackModule,
    DateFnsModule
  ],
  declarations: [
    CalendarComponent,
    WeekComponent,
    DayComponent,
    WeekMetricComponent
  ],
  entryComponents: [
    CalendarComponent
  ],
  exports: [
    CalendarComponent,
    WeekComponent,
    DayComponent,
    WeekMetricComponent
  ]
})
export class CalendarModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<CalendarModule> {
    const fnsConfig = new DateFnsConfigurationService();
    const locale = config.locale || {};
    fnsConfig.setLocale(locale.dfns || dfnsEnUS);
    return {
      ngModule: CalendarModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        },
        {
          provide: DateFnsConfigurationService,
          useValue: fnsConfig
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
