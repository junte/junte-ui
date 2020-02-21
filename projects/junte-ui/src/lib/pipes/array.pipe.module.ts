import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IncludesPipe, JoinPipe, MockArrayPipe, NumberArrayPipe } from './array.pipe';

@NgModule({
  declarations: [
    MockArrayPipe,
    NumberArrayPipe,
    JoinPipe,
    IncludesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MockArrayPipe,
    NumberArrayPipe,
    JoinPipe,
    IncludesPipe
  ]
})
export class ArrayPipeModule {
}
