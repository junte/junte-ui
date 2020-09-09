import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorPipesModule } from '../../core/pipes/color-pipes.module';
import { IconModule } from '../../elements/icon/icon.module';
import { StackModule } from '../../layout/stack/stack.module';
import { TimelineItemComponent } from './item/timeline-item.component';
import { TimelineComponent } from './timeline.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule,
    ColorPipesModule,
    StackModule,
  ],
  declarations: [
    TimelineComponent,
    TimelineItemComponent
  ],
  entryComponents: [
    TimelineComponent
  ],
  exports: [
    TimelineComponent,
    TimelineItemComponent
  ]
})
export class TimelineModule {
}
