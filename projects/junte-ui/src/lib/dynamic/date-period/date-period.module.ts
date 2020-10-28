import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DatePipesModule } from '../../core/pipes/date-pipes.module';
import { StackModule } from '../../layout/stack/stack.module';
import { DatePeriodComponent } from './date-period.component';

@NgModule({
  declarations: [
    DatePeriodComponent
  ],
  imports: [
    CommonModule,
    StackModule,
    DatePipesModule
  ],
  exports: [
    DatePeriodComponent
  ]
})
export class DatePeriodModule {
}
