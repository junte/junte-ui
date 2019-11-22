import { Component, OnInit } from '@angular/core';
import { UI } from '../../../../projects/junte-ui/src/lib/enum/ui';

@Component({
  selector: 'app-kanban-test',
  templateUrl: './kanban-test.component.html',
  styleUrls: ['./kanban-test.component.scss']
})
export class KanbanTestComponent {

  ui = UI;

}
