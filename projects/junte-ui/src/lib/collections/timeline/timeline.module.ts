import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { ColorPipesModule } from '../../core/pipes/color-pipes.module';
import { IconModule } from '../../elements/icon/icon.module';
import { StackModule } from '../../layout/stack/stack.module';
import { TimelineItemDirective } from './item/timeline-item.directive';
import { TimelineComponent } from './timeline.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule,
    ColorPipesModule,
    StackModule,
    ArrayPipesModule
  ],
  declarations: [
    TimelineComponent,
    TimelineItemDirective
  ],
  entryComponents: [
    TimelineComponent
  ],
  exports: [
    TimelineComponent,
    TimelineItemDirective
  ]
})
export class TimelineModule {
}
