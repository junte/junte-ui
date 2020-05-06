import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AfterPipe } from './date/after.pipe';
import { BeforePipe } from './date/before.pipe';
import { FullMonthPipe } from './date/full-month.pipe';
import { DatesInMonthPipe } from './date/dates-in-month.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AfterPipe,
    BeforePipe,
    FullMonthPipe,
    DatesInMonthPipe
  ],
  exports: [
    AfterPipe,
    BeforePipe,
    FullMonthPipe,
    DatesInMonthPipe
  ]
})
export class DatePipesModule {
}
