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

  @ContentChild('headerMenuTemplate', {static: false})
  headerMenuTemplate: TemplateRef<any>;

  @PropertyApi({
    description: 'Logo template',
    type: 'TemplateRef'
  })
  @ContentChild('headerLogoTemplate', {static: false})
  headerLogoTemplate: TemplateRef<any>;

  @PropertyApi({
    description: 'Userbar template',
    type: 'TemplateRef'
  })
  @ContentChild('headerUserbarTemplate', {static: false})
  headerUserbarTemplate: TemplateRef<any>;

  @PropertyApi({
    description: 'Actions template',
    type: 'TemplateRef'
  })
  @ContentChild('headerActionsTemplate', {static: false})
  headerActionsTemplate: TemplateRef<any>;

}
