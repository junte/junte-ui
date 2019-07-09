import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar.component';
import { StackModule } from '../stack';

@NgModule({
  imports: [
    CommonModule,
    StackModule
  ],
  exports: [
    ProgressBarComponent
  ],
  declarations: [
    ProgressBarComponent
  ]
})
export class ProgressBarModule {
}
