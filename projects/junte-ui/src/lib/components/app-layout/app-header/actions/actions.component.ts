import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { ActionComponent } from '../action/action.component';
import { MenuType, Sizes } from '../../../../enum/ui';

@Component({
  selector: 'jnt-actions',
  templateUrl: './actions.encapsulated.html'
})
export class ActionsComponent {

  @Input() type: MenuType = MenuType.horizontal;
  @Input() spacer: Sizes = Sizes.large;

  @HostBinding('attr.host') readonly host = 'jnt-actions-host';

  @ContentChildren(ActionComponent)
  actions: QueryList<ActionComponent>;
}
