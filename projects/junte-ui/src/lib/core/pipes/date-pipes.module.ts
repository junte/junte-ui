import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  AfterPipe,
  BeforePipe,
  FullMonthPipe,
  DatesInMonthPipe
} from './date.pipe';

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
