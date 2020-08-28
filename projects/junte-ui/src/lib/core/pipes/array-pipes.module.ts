import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IncludesPipe } from './array/includes.pipe';
import { JoinPipe } from './array/join.pipe';
import { MockArrayPipe } from './array/mock-array.pipe';

@NgModule({
  declarations: [
    MockArrayPipe,
    JoinPipe,
    IncludesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MockArrayPipe,
    JoinPipe,
    IncludesPipe
  ]
})
export class ArrayPipesModule {
}
