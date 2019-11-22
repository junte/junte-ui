import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanComponent } from './kanban.component';
import { KanbanListComponent } from './list/kanban-list.component';
import { StackModule } from '../stack/stack.module';
import { BlockModule } from '../block/block.module';
import { KanbanTicketComponent } from './ticket/kanban-ticket.component';
import { SkeletonModule } from '../skeleton/skeleton.module';

@NgModule({
  imports: [
    CommonModule,
    StackModule,
    BlockModule,
    SkeletonModule,
  ],
  exports: [
    KanbanComponent,
    KanbanListComponent,
    KanbanTicketComponent
  ],
  declarations: [
    KanbanComponent,
    KanbanListComponent,
    KanbanTicketComponent,
  ]
})
export class KanbanModule {
}
