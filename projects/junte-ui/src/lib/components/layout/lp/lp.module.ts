import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '../../forms/button/button.module';
import { StackModule } from '../stack/stack.module';
import { LpLayoutComponent } from './layout/lp-layout.component';
import { LpRewindComponent } from './rewind/lp-rewind.component';
import { LpSlideComponent } from './slide/lp-slide.component';

@NgModule({
  imports: [
    CommonModule,
    StackModule,
    ButtonModule
  ],
  declarations: [
    LpLayoutComponent,
    LpRewindComponent,
    LpSlideComponent
  ],
  exports: [
    LpLayoutComponent,
    LpRewindComponent,
    LpSlideComponent
  ]
})
export class LpModule {
}
