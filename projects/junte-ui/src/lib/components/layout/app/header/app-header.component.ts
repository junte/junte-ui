import { Component, ContentChild, HostBinding, TemplateRef } from '@angular/core';
import { ContentApi } from '../../../../decorators/api';
import { UI } from '../../../../enums/ui';

@Component({
  selector: 'jnt-app-header',
  templateUrl: './app-header.encapsulated.html'
})
export class AppHeaderComponent {

  @HostBinding('attr.host') readonly host = 'jnt-app-header-host';

  ui = UI;

  @ContentApi({
    selector: '#headerMenuTemplate',
    description: 'Menu template'
  })

  @ContentChild('headerMenuTemplate')
  headerMenuTemplate: TemplateRef<any>;

  @ContentApi({
    selector: '#headerLogoTemplate',
    description: 'Logo template'
  })
  @ContentChild('headerLogoTemplate')
  headerLogoTemplate: TemplateRef<any>;

  @ContentApi({
    selector: '#headerUserbarTemplate',
    description: 'Userbar template'
  })
  @ContentChild('headerUserbarTemplate')
  headerUserbarTemplate: TemplateRef<any>;

  @ContentApi({
    selector: '#headerActionsTemplate',
    description: 'Actions template'
  })
  @ContentChild('headerActionsTemplate')
  headerActionsTemplate: TemplateRef<any>;

}
