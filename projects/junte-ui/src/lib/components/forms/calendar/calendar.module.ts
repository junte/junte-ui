import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DateFnsModule } from 'ngx-date-fns';
import { JunteUIModuleConfig } from '../../../config';
import { JUNTE_UI_I18N_KEYS } from '../../../i18n/consts';
import { en } from '../../../i18n/en';
import { I18nLoader } from '../../../i18n/loader';
import { DatePipeModule } from '../../../pipes/date-pipe.module';
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
    return {
      ngModule: CalendarModule,
      providers: [
        {
          provide: JUNTE_UI_I18N_KEYS,
          useValue: config.i18n || en
        },
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: I18nLoader
          },
          defaultLanguage: 'en'
        }).providers]
    };
  }

}
