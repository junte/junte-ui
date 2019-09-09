import { Component, ContentChild, HostBinding, TemplateRef } from '@angular/core';
import { UI } from '../../../enum/ui';

@Component({
  selector: 'jnt-app-header',
  templateUrl: './app-header.encapsulated.html'
})
export class AppHeaderComponent {

  @HostBinding('attr.host') readonly host = 'jnt-app-header-host';

  ui = UI;

  @ContentChild('topMenu', {static: false})
  topMenu: TemplateRef<any>;

  @ContentChild('logo', {static: false})
  logo: TemplateRef<any>;

  @ContentChild('userbar', {static: false})
  userbar: TemplateRef<any>;

  @ContentChild('actions', {static: false})
  actions: TemplateRef<any>;

}
