import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArrayPipeModule } from '../../../pipes/array-pipe.module';
import { DatePipeModule } from '../../../pipes/date-pipe.module';
import { ButtonModule } from '../../forms/button/button.module';
import { SkeletonModule } from '../../layout/skeleton/skeleton.module';
import { IconModule } from '../../elements/icon/icon.module';
import { GanttLineComponent } from './gantt-line/gantt-line.component';
import { GanttComponent } from './gantt.component';
import { StatusPipe } from './gantt.pipes';

@NgModule({
  declarations: [
    GanttComponent,
    GanttLineComponent,
    StatusPipe
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
    GanttLineComponent,
    StatusPipe
  ]
})
export class GanttModule {
}
