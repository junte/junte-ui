import { Component, ContentChild, HostBinding, TemplateRef } from '@angular/core';

@Component({
  selector: 'jnt-userbar',
  templateUrl: './userbar.encapsulated.html'
})
export class UserbarComponent {

  @HostBinding('attr.host') readonly host = 'jnt-userbar-host';

  @ContentChild('avatar')
  avatar: TemplateRef<any>;

  @ContentChild('userMenu')
  userMenu: TemplateRef<any>;

}
