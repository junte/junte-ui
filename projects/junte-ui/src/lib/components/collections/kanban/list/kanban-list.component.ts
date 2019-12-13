import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { KanbanTicketComponent } from '../ticket/kanban-ticket.component';

@Component({
  selector: 'jnt-kanban-list',
  template: ''
})
export class KanbanListComponent {

  @Input() title: string;

  @ContentChildren(KanbanTicketComponent)
  tickets: QueryList<KanbanTicketComponent>;

}
