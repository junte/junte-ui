import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArrayPipeModule } from '../../../pipes/array-pipe.module';
import { DatePipeModule } from '../../../pipes/date-pipe.module';
import { ButtonModule } from '../../forms/button/button.module';
import { SkeletonModule } from '../../layout/skeleton/skeleton.module';
import { IconModule } from '../../elements/icon/icon.module';
import { GanttLineComponent } from './gantt-line/gantt-line.component';
import { GanttComponent } from './gantt.component';

@NgModule({
  declarations: [
    GanttComponent,
    GanttLineComponent
  ],
  imports: [
    CommonModule,
    DatePipeModule,
    ArrayPipeModule,
    IconModule,
    SkeletonModule,
    ButtonModule
  ],
  exports: [
    GanttComponent,
    GanttLineComponent
  ]
})
export class GanttModule {
}
