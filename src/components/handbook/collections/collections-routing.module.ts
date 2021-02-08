import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GanttTestComponent } from './gantt/gantt-test.component';
import { TableTestComponent } from './table/table-test.component';
import { TimelineTestComponent } from './timeline/timeline-test.component';

export const routes: Routes = [
  {
    path: '',
    data: {breadcrumb: 'Collections'},
    children: [
      {
        path: 'gantt',
        component: GanttTestComponent,
        data: {breadcrumb: 'Gantt', animation: 'Gantt'}
      },
      {
        path: 'table',
        component: TableTestComponent,
        data: {breadcrumb: 'Table', animation: 'Table'}
      },
      {
        path: 'timeline',
        component: TimelineTestComponent,
        data: {breadcrumb: 'Timeline', animation: 'Timeline'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule {
}
