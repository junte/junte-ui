import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockModule } from '../block/block.module';
import { SkeletonModule } from '../skeleton/skeleton.module';
import { StackModule } from '../stack/stack.module';
import { KanbanComponent } from './kanban.component';
import { KanbanListComponent } from './list/kanban-list.component';
import { KanbanTicketComponent } from './ticket/kanban-ticket.component';

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
