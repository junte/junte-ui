import { Component, ContentChild, HostBinding, Input, TemplateRef } from '@angular/core';
import { UI } from '../../../enum/ui';

@Component({
  selector: 'jnt-app-header',
  templateUrl: './app-header.encapsulated.html'
})
export class AppHeaderComponent {

  @HostBinding('attr.host') readonly host = 'jnt-app-header-host';

  ui = UI;

  @ContentChild('topMenu')
  topMenu: TemplateRef<any>;

  @ContentChild('logo')
  logo: TemplateRef<any>;

  @ContentChild('userbar')
  userbar: TemplateRef<any>;

  @ContentChild('actions')
  actions: TemplateRef<any>;

}
