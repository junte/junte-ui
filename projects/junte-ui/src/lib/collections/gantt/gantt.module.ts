import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateFnsModule } from 'ngx-date-fns';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { IconModule } from '../../elements/icon/icon.module';
import { ButtonModule } from '../../forms/button/button.module';
import { SkeletonModule } from '../../layout/skeleton/skeleton.module';
import { GanttLinePeriodComponent } from './gantt-line-period/gantt-line-period.component';
import { GanttLineComponent } from './gantt-line/gantt-line.component';
import { GanttPipesModule } from './gantt-pipes.module';
import { GanttComponent } from './gantt.component';

@NgModule({
  declarations: [
    GanttComponent,
    GanttLineComponent,
    GanttLinePeriodComponent
  ],
  imports: [
    CommonModule,
    GanttPipesModule,
    ArrayPipesModule,
    IconModule,
    SkeletonModule,
    ButtonModule,
    DateFnsModule
  ],
  exports: [
    GanttComponent,
    GanttLineComponent,
    GanttLinePeriodComponent
  ]
})
export class GanttModule {
}
