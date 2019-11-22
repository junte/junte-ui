import { Component, ContentChildren, HostBinding, OnInit, QueryList } from '@angular/core';
import { KanbanListComponent } from './list/kanban-list.component';
import { UI } from '../../enum/ui';

@Component({
  selector: 'jnt-kanban',
  templateUrl: './kanban.encapsulated.html'
})
export class KanbanComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-kanban-host';

  @ContentChildren(KanbanListComponent)
  lists: QueryList<KanbanListComponent>;

  loading: boolean;

}
