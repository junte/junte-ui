import { Component, ContentChild, HostBinding, TemplateRef } from '@angular/core';
import { UI } from '../../../../../enums/ui';

@Component({
  selector: 'jnt-userbar',
  templateUrl: './userbar.encapsulated.html'
})
export class UserbarComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-userbar-host';

  @ContentChild('userbarAvatarTemplate', {static: false})
  userbarAvatarTemplate: TemplateRef<any>;

  @ContentChild('userbarMenuTemplate', {static: false})
  userbarMenuTemplate: TemplateRef<any>;

}
