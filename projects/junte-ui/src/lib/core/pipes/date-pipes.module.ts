import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  AfterPipe,
  BeforePipe,
  FullMonthPipe
} from './date.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AfterPipe,
    BeforePipe,
    FullMonthPipe
  ],
  exports: [
    AfterPipe,
    BeforePipe,
    FullMonthPipe
  ]
})
export class DatePipesModule {
}
