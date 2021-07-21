import { ViewportScroller } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  HostBinding,
  NgZone,
  OnInit,
  Renderer2,
  TemplateRef
} from '@angular/core';
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
export class LpHeaderComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-lp-header-host';

  ui = UI;

  private listeners: Function[] = [];

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

  constructor(private logger: NGXLogger,
              public cd: ChangeDetectorRef,
              private scroller: ViewportScroller,
              private renderer: Renderer2,
              private zone: NgZone) {
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.listeners.push(this.renderer.listen('window', 'scroll', () => {
        const [, scrollY] = this.scroller.getScrollPosition();
        if (scrollY > 0) {
          if (!this.scrolled) {
            this.scrolled = true;
            this.cd.markForCheck();
          }
        } else {
          if (this.scrolled) {
            this.scrolled = false;
            this.cd.markForCheck();
          }
        }
      }));
    });
  }


  hide() {
    this.logger.debug('hide header dropdown');
    if (!!this.reference.popover) {
      this.reference.popover.hide();
      this.reference.popover = null;
    }
  }
}
