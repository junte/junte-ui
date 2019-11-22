import { Component, Input } from '@angular/core';
import { UI } from '../../../enum/ui';

@Component({
  selector: 'jnt-kanban-ticket',
  template: ''
})
export class KanbanTicketComponent {

  ui = UI;

  @Input() title: string;

}
