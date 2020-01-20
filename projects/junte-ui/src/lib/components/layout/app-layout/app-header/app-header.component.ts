import { Component, ContentChild, HostBinding, TemplateRef } from '@angular/core';
import { UI } from '../../../../enums/ui';
import { PropertyApi } from '../../../../decorators/api';

@Component({
  selector: 'jnt-app-header',
  templateUrl: './app-header.encapsulated.html'
})
export class AppHeaderComponent {

  @HostBinding('attr.host') readonly host = 'jnt-app-header-host';

  ui = UI;

  @PropertyApi({
    description: 'Menu template',
    type: 'TemplateRef'
  })

  @ContentChild('topMenu', {static: false})
  topMenu: TemplateRef<any>;

  @PropertyApi({
    description: 'Logo template',
    type: 'TemplateRef'
  })

  @ContentChild('logo', {static: false})
  logo: TemplateRef<any>;

  @PropertyApi({
    description: 'Userbar template',
    type: 'TemplateRef'
  })

  @ContentChild('userbar', {static: false})
  userbar: TemplateRef<any>;

  @PropertyApi({
    description: 'Actions template',
    type: 'TemplateRef'
  })

  @ContentChild('actions', {static: false})
  actions: TemplateRef<any>;

}
