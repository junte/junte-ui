import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionTestComponent } from './accordion/accordion-test.component';
import { GanttTestComponent } from './gantt/gantt-test.component';
import { KanbanTestComponent } from './kanban/kanban-test.component';
import { SliderTestComponent } from './slider/slider-test.component';
import { TableTestComponent } from './table/table-test.component';

export const routes: Routes = [
  {
    path: 'gantt',
    component: GanttTestComponent,
    data: {breadcrumb: 'Gantt'}
  },
  {
    path: 'table',
    component: TableTestComponent,
    data: {breadcrumb: 'Table'}
  },
  {
    path: 'slider',
    component: SliderTestComponent,
    data: {breadcrumb: 'Slider'}
  },
  {
    path: 'accordion',
    component: AccordionTestComponent,
    data: {breadcrumb: 'Accordion'}
  },
  {
    path: 'kanban',
    component: KanbanTestComponent,
    data: {breadcrumb: 'Kanban'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule {
}
