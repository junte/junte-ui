import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DatePipeModule } from '../../../pipes/date-pipe.module';
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
}
