import { NgModule } from '@angular/core';
import { GanttModule } from './gantt/gantt.module';
import { TableModule } from './table/table.module';
import { TimelineModule } from './timeline/timeline.module';

@NgModule({
  exports: [
    GanttModule,
    TableModule,
    TimelineModule,
  ]
})
export class CollectionsModule {
}
