import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DateFnsModule } from 'ngx-date-fns';
import { JUNTE_MODULE_PROVIDES } from '../../config';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { IconModule } from '../../elements/icon/icon.module';
import { StackModule } from '../../layout/stack/stack.module';
import { ButtonModule } from '../button/button.module';
import { CalendarComponent } from './calendar.component';
import { WeekMetricComponent } from './week/week-metric.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IconModule,
    StackModule,
    DateFnsModule,
    ArrayPipesModule,
    ButtonModule
  ],
  declarations: [
    CalendarComponent,
    WeekMetricComponent
  ],
  entryComponents: [
    CalendarComponent,
    WeekMetricComponent
  ],
  exports: [
    CalendarComponent,
    WeekMetricComponent
  ],
  providers: [...JUNTE_MODULE_PROVIDES]
})
export class CalendarModule {
}
