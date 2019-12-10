import { Component, ContentChildren, HostBinding, QueryList } from '@angular/core';
import { UI } from '../../../enum/ui';
import { KanbanListComponent } from './list/kanban-list.component';

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
