import { ChangeDetectorRef, Component, ContentChild, HostBinding, HostListener, TemplateRef } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { LOGGER_PROVIDERS } from '../../../core/logger/providers';
import { UI } from '../../../core/enums/ui';
import { MenuComponent } from '../../../navigation/menu/menu.component';
import { PopoverInstance } from '../../../overlays/popover/popover.service';

@Component({
  selector: 'jnt-lp-header',
  templateUrl: './lp-header.encapsulated.html',
  providers: [...LOGGER_PROVIDERS]
})
export class LpHeaderComponent {

  @HostBinding('attr.host') readonly host = 'jnt-lp-header-host';

  ui = UI;

  reference: { popover: PopoverInstance } = {popover: null};

  @HostBinding('attr.data-scrolled')
  scrolled = false;

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

  @HostListener('window:scroll')
  onPageScroll() {
    const offset = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0;
    this.scrolled = offset > 0;
  }

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
