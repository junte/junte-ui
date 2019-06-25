import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyPipe } from './empty-pipe';

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
export class TextPipeModule {
}
