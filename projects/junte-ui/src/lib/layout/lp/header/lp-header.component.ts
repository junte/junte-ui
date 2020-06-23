import { Component, ContentChild, HostBinding, TemplateRef } from '@angular/core';
import { UI } from '../../../core/enums/ui';
import { MenuComponent } from '../../../navigation/menu/menu.component';

@Component({
  selector: 'jnt-lp-header',
  templateUrl: './lp-header.encapsulated.html'
})
export class LpHeaderComponent {

  @HostBinding('attr.host') readonly host = 'jnt-lp-header-host';

  ui = UI;

  opened = false;

  @ContentChild('headerLogoTemplate')
  headerLogoTemplate: TemplateRef<any>;

  @ContentChild('contentTemplate')
  contentTemplate: TemplateRef<any>;

  @ContentChild(MenuComponent)
  menu: MenuComponent;

  @ContentChild('headerUserbarTemplate')
  headerUserbarTemplate: TemplateRef<any>;

  @ContentChild('headerActionsTemplate')
  headerActionsTemplate: TemplateRef<any>;
}
