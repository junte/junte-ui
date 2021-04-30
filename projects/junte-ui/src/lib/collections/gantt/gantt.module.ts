import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StackModule } from '../../layout/stack/stack.module';
import { SpinnerModule } from '../../layout/spinner/spinner.module';
import { ResponsiveModule } from '../../layout/responsive/responsive.module';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { DatePipesModule } from '../../core/pipes/date-pipes.module';
import { IconModule } from '../../elements/icon/icon.module';
import { ButtonModule } from '../../forms/button/button.module';
import { SkeletonModule } from '../../layout/skeleton/skeleton.module';
import { GanttLinePeriodComponent } from './gantt-line-period/gantt-line-period.component';
import { GanttLineComponent } from './gantt-line/gantt-line.component';
import { GanttPipesModule } from './gantt-pipes.module';
import { GanttComponent } from './gantt.component';
import { AccordionModule } from '../../navigation/accordion/accordion.module';

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
    DatePipesModule,
    IconModule,
    SkeletonModule,
    ResponsiveModule,
    ButtonModule,
    AccordionModule,
    SpinnerModule,
    StackModule
  ],
  exports: [
    GanttComponent,
    GanttLineComponent,
    GanttLinePeriodComponent
  ]
})
export class GanttModule {
}
