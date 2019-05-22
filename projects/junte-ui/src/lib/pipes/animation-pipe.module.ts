import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisibleElementPipe } from './visible-element.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VisibleElementPipe
  ],
  exports: [
    VisibleElementPipe
  ]
})
export class AnimationPipeModule {
}
