import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VisibleElementPipe } from './animation/visible-element.pipe';

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
export class AnimationPipesModule {
}
