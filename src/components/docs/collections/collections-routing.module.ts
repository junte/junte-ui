import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GanttTestComponent } from './gantt/gantt-test.component';
import { TableTestComponent } from './table/table-test.component';

export const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule {
}
