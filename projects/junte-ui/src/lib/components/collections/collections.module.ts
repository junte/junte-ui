import { NgModule } from '@angular/core';
import { GanttModule } from './gantt/gantt.module';
import { TableModule } from './table/table.module';
import { AccordionModule } from './accordion/accordion.module';

@NgModule({
  exports: [
    GanttModule,
    TableModule,
    AccordionModule,
  ]
})
export class CollectionsModule {
}
