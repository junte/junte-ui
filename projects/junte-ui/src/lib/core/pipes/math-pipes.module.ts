import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoundPipe } from './math/round.pipe';
import { TruncPipe } from './math/trunc.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TruncPipe,
    RoundPipe
  ],
  exports: [
    TruncPipe,
    RoundPipe
  ]
})
export class TextPipesModule {
}
