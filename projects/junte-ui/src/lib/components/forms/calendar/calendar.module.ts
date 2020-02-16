import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DateFnsModule } from 'ngx-date-fns';
import { createModule, JunteUIModuleConfig } from '../../../config';
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
    return createModule(CalendarModule, config);
  }

}
