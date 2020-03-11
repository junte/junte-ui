import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisibleElementPipe } from './animation.pipe';

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
