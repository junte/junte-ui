import { Component, ContentChild, HostBinding, TemplateRef } from '@angular/core';
import { ContentApi } from '../../../core/decorators/api';
import { UI } from '../../../core/enums/ui';
import { MenuComponent } from '../../../navigation/menu/menu.component';

@Component({
  selector: 'jnt-app-header',
  templateUrl: './app-header.encapsulated.html'
})
export class AppHeaderComponent {

  @HostBinding('attr.host') readonly host = 'jnt-app-header-host';

  ui = UI;

  opened = false;

  @ContentApi({
    selector: '#headerLogoTemplate',
    description: 'Logo template'
  })
  @ContentChild('headerLogoTemplate')
  headerLogoTemplate: TemplateRef<any>;

  @ContentApi({
    selector: '#headerMenuTemplate',
    description: 'Menu template'
  })
  @ContentChild('contentTemplate')
  contentTemplate: TemplateRef<any>;

  @ContentChild(MenuComponent, {static: false})
  menu: MenuComponent;

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
