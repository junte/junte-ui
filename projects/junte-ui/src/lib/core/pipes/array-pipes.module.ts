import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterEmptyPipe } from './array/filter-empty.pipe';
import { MockArrayPipe } from './array/mock-array.pipe';
import { JoinPipe } from './array/join.pipe';
import { PopPipe } from './array/pop.pipe';
import { IncludesPipe } from './array/includes.pipe';

@NgModule({
  declarations: [
    MockArrayPipe,
    JoinPipe,
    IncludesPipe,
    PopPipe,
    FilterEmptyPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MockArrayPipe,
    JoinPipe,
    IncludesPipe,
    PopPipe,
    FilterEmptyPipe
  ]
})
export class ArrayPipesModule {
}
