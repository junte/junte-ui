import { Component, ContentChild, HostBinding, TemplateRef } from '@angular/core';
import { UI } from '../../../../../enums/ui';

@Component({
  selector: 'jnt-userbar',
  templateUrl: './userbar.encapsulated.html'
})
export class UserbarComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-userbar-host';

  @ContentChild('avatar', {static: false})
  avatar: TemplateRef<any>;

  @ContentChild('userMenu', {static: false})
  userMenu: TemplateRef<any>;

}
