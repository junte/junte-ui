import { Component, ContentChild, HostBinding, TemplateRef } from '@angular/core';

@Component({
  selector: 'jnt-userbar',
  templateUrl: './encapsulated.html',
  styleUrls: ['./encapsulated.scss']
})
export class UserbarComponent {

  @HostBinding('attr.host') readonly host = 'jnt-userbar-host';

  @ContentChild('avatar')
  avatar: TemplateRef<any>;

  @ContentChild('userMenu')
  userMenu: TemplateRef<any>;

}
