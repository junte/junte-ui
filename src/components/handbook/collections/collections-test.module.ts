import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppLayoutModule, GridModule } from 'junte-ui';
import { SectionModule } from '../shared/section/section.module';
import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsTestComponent } from './collections-test.component';
import { GanttTestModule } from './gantt/gantt-test.module';
import { TableTestModule } from './table/table-test.module';
import { TimelineTestModule } from './timeline/timeline-test.module';

@NgModule({
  declarations: [
    CollectionsTestComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SectionModule,
    AppLayoutModule,
    GridModule
  ],
  exports: [
    GanttTestModule,
    TableTestModule,
    TimelineTestModule,
    CollectionsTestComponent
  ]
})
export class CollectionsTestModule {
}
