import { NgModule } from '@angular/core';
import { GanttModule } from './gantt/gantt.module';
import { SliderCarouselModule } from './slider/slider.module';
import { TableModule } from './table/table.module';
import { AccordionModule } from './accordion/accordion.module';
import { KanbanModule } from './kanban/kanban.module';

@NgModule({
  exports: [
    GanttModule,
    SliderCarouselModule,
    TableModule,
    AccordionModule,
    KanbanModule
  ]
})
export class CollectionsModule {
}
