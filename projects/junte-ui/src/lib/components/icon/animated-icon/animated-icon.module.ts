import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnimatedIconComponent } from './animated-icon.component';

@NgModule({
  declarations: [
    AnimatedIconComponent
  ],
  exports: [
    AnimatedIconComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AnimatedIconModule {

}
