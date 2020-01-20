import { Component, Input } from '@angular/core';
import { UI } from '../../../../enums/ui';

@Component({
  selector: 'jnt-kanban-ticket',
  template: ''
})
export class KanbanTicketComponent {

  ui = UI;

  @Input() title: string;

}
