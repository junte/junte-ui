import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { ProgressLineDirective } from './line/progress-line.directive';
import { GetColorPipe } from './pipes';
import { ProgressBarComponent } from './progress-bar.component';

@NgModule({
  imports: [
    CommonModule,
    ArrayPipesModule
  ],
  exports: [
    ProgressBarComponent,
    ProgressLineDirective
  ],
  entryComponents: [
    ProgressBarComponent
  ],
  declarations: [
    ProgressBarComponent,
    ProgressLineDirective,
    GetColorPipe
  ]
})
export class ProgressBarModule {
}
