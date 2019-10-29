import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DatePeriodComponent } from './date-period.component';
import { StackModule } from '../stack/stack.module';
import { DatePipeModule } from '../../pipes/date-pipe.module';


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
