import { Component, ContentChild, HostBinding, TemplateRef } from '@angular/core';
import { ContentApi } from '../../../core/decorators/api';
import { UI } from '../../../core/enums/ui';

@Component({
  selector: 'jnt-app-header',
  templateUrl: './app-header.encapsulated.html'
})
export class AppHeaderComponent {

  @HostBinding('attr.host') readonly host = 'jnt-app-header-host';

  ui = UI;

  opened = false;

  @ContentApi({
    selector: '#headerMenuTemplate',
    description: 'Menu template'
  })
  @ContentChild('headerMenuTemplate')
  headerMenuTemplate: TemplateRef<any>;

  @ContentApi({
    selector: '#headerMobileMenuTemplate',
    description: 'Menu template'
  })
  @ContentChild('headerMobileMenuTemplate')
  headerMobileMenuTemplate: TemplateRef<any>;

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
