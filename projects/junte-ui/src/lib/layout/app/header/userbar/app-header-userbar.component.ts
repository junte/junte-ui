import { Component, ContentChild, HostBinding, TemplateRef } from '@angular/core';
import { UI } from '../../../../core/enums/ui';

@Component({
  selector: 'jnt-app-header-userbar',
  templateUrl: './app-header-userbar.encapsulated.html'
})
export class AppHeaderUserbarComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-app-header-userbar-host';

  @ContentChild('userbarAvatarTemplate')
  userbarAvatarTemplate: TemplateRef<any>;

  @ContentChild('userbarMenuTemplate')
  userbarMenuTemplate: TemplateRef<any>;

}
