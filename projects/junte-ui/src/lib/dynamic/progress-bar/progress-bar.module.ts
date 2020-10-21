import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { ProgressLineComponent } from './line/progress-line.component';
import { ProgressBarComponent } from './progress-bar.component';

@NgModule({
  imports: [
    CommonModule,
    ArrayPipesModule
  ],
  exports: [
    ProgressBarComponent,
    ProgressLineComponent
  ],
  entryComponents: [
    ProgressBarComponent
  ],
  declarations: [
    ProgressBarComponent,
    ProgressLineComponent
  ]
})
export class ProgressBarModule {
}
