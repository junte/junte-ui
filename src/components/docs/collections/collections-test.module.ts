import { NgModule } from '@angular/core';
import { CollectionsRoutingModule } from './collections-routing.module';
import { FiltersTestModule } from './filters/filters-test.module';
import { GanttTestModule } from './gantt/gantt-test.module';
import { TableTestModule } from './table/table-test.module';
import { TimelineTestModule } from './timeline/timeline-test.module';

@NgModule({
  imports: [
    CollectionsRoutingModule
  ],
  exports: [
    GanttTestModule,
    TableTestModule,
    TimelineTestModule,
    FiltersTestModule
  ]
})
export class CollectionsTestModule {
}
