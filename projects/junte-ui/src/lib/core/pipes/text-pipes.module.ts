import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmptyPipe } from './text.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EmptyPipe
  ],
  exports: [
    EmptyPipe
  ]
})
export class TextPipesModule {
}
