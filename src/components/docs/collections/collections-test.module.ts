import { NgModule } from '@angular/core';
import { CollectionsRoutingModule } from './collections-routing.module';
import { TableTestModule } from './table/table-test.module';
import { GanttTestModule } from './gantt/gantt-test.module';

@NgModule({
  imports: [
    CollectionsRoutingModule
  ],
  exports: [
    GanttTestModule,
    TableTestModule
  ]
})
export class CollectionsTestModule {
}
