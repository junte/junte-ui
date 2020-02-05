import { NgModule } from '@angular/core';
import { CollectionsRoutingModule } from './collections-routing.module';
import { TableTestModule } from './table/table-test.module';
import { SliderTestModule } from './slider/slider-test.module';
import { KanbanTestModule } from './kanban/kanban-test.module';
import { GanttTestModule } from './gantt/gantt-test.module';
import { AccordionTestModule } from './accordion/accordion-test.module';

@NgModule({
  imports: [
    CollectionsRoutingModule
  ],
  exports: [
    AccordionTestModule,
    GanttTestModule,
    KanbanTestModule,
    SliderTestModule,
    TableTestModule
  ]
})
export class CollectionsTestModule {
}
