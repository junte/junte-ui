import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IncludesPipe, JoinPipe, MockArrayPipe } from './array.pipe';

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
