import { Component, ContentChild, HostBinding, TemplateRef } from '@angular/core';
import { UI } from '../../../core/enums/ui';
import { MenuComponent } from '../../../navigation/menu/menu.component';

@Component({
  selector: 'jnt-lp-footer',
  templateUrl: './lp-footer.encapsulated.html'
})
export class LpFooterComponent {

  @HostBinding('attr.host') readonly host = 'jnt-lp-footer-host';

  ui = UI;

  @ContentChild('footerCopyrightTemplate')
  footerCopyrightTemplate: TemplateRef<any>;

  @ContentChild('contentTemplate')
  contentTemplate: TemplateRef<any>;

  @ContentChild('lpFooterMenu')
  menu: MenuComponent;
}
