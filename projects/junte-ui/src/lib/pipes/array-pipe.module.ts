import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JoinPipe, MockArrayPipe, NumberArrayPipe } from './array-pipe';

@NgModule({
  declarations: [
    MockArrayPipe,
    NumberArrayPipe,
    JoinPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MockArrayPipe,
    NumberArrayPipe,
    JoinPipe
  ]
})
export class ArrayPipeModule {
}
