import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SanitizePipeModule } from '../../pipes/sanitize.module';
import { AnimatedIconComponent } from './animated-icon.component';

@NgModule({
  declarations: [
    AnimatedIconComponent
  ],
  exports: [
    AnimatedIconComponent
  ],
  imports: [
    CommonModule,
    SanitizePipeModule
  ]
})
export class AnimatedIconModule {
}
