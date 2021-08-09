import { ViewportScroller } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  HostBinding,
  OnInit,
  Renderer2,
  TemplateRef
} from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { UI } from '../../../core/enums/ui';
import { LOGGER_PROVIDERS } from '../../../core/logger/providers';
import { MenuComponent } from '../../../navigation/menu/menu.component';
import { PopoverInstance } from '../../../overlays/popover/popover.service';

@Component({
  selector: 'jnt-lp-header',
  templateUrl: './lp-header.encapsulated.html',
  providers: [...LOGGER_PROVIDERS],
  changeDetection: ChangeDetectionStrategy.OnPush
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
              private renderer: Renderer2) {
  }

  ngOnInit() {
    this.listeners.push(this.renderer.listen('window', 'scroll', () => {
      const [, scrollY] = this.scroller.getScrollPosition();
      if (scrollY > 0) {
        if (!this.scrolled) {
          this.scrolled = true;
          this.cd.detectChanges();
        }
      } else {
        if (this.scrolled) {
          this.scrolled = false;
          this.cd.detectChanges();
        }
      }
    }));
  }


  hide() {
    this.logger.debug('hide header dropdown');
    if (!!this.reference.popover) {
      this.reference.popover.hide();
      this.reference.popover = null;
    }
  }
}
