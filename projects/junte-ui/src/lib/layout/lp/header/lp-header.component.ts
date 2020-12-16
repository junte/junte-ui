import { ChangeDetectorRef, Component, ContentChild, HostBinding, TemplateRef } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { UI } from '../../../core/enums/ui';
import { MenuComponent } from '../../../navigation/menu/menu.component';
import { PopoverInstance } from '../../../overlays/popover/popover.service';

@Component({
  selector: 'jnt-lp-header',
  templateUrl: './lp-header.encapsulated.html'
})
export class LpHeaderComponent {

  @HostBinding('attr.host') readonly host = 'jnt-lp-header-host';

  ui = UI;

  reference: { popover: PopoverInstance } = {popover: null};

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

  constructor(private logger: NGXLogger,
              public cd: ChangeDetectorRef) {
  }

  hide() {
    this.logger.debug('hide header dropdown');
    if (!!this.reference.popover) {
      this.reference.popover.hide();
      this.reference.popover = null;
    }
  }
}
