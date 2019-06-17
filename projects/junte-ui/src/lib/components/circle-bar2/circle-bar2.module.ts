import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleBar2Component } from './circle-bar2.component';
import { SanitizePipeModule } from '../../pipes/sanitize.module';
import { SumPipeModule } from '../../pipes/sum-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    SumPipeModule,
    SanitizePipeModule
  ],
  declarations: [
    CircleBar2Component
  ],
  exports: [
    CircleBar2Component
  ]
})
export class CircleBar2Module {
}
