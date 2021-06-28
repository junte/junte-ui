import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { IconModule } from '../../elements/icon/icon.module';
import { StackModule } from '../../layout/stack/stack.module';
import { DatePipesModule } from '../../core/pipes/date-pipes.module';
import { ButtonModule } from '../button/button.module';
import { CalendarComponent } from './calendar.component';
import { WeekMetricDirective } from './week/week-metric.directive';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IconModule,
    StackModule,
    ArrayPipesModule,
    DatePipesModule,
    ButtonModule
  ],
  declarations: [
    CalendarComponent,
    WeekMetricDirective
  ],
  entryComponents: [
    CalendarComponent
  ],
  exports: [
    CalendarComponent,
    WeekMetricDirective
  ]
})
export class CalendarModule {
}
