import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MockArrayPipe } from './array/mock-array.pipe';
import { JoinPipe } from './array/join.pipe';
import { IncludesPipe } from './array/includes.pipe';

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
