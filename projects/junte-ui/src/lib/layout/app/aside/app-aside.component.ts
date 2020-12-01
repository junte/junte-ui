import { Component, ContentChild, HostBinding, Input, OnInit, TemplateRef } from '@angular/core';
import { DeviceService } from '../../responsive/device.service';
import { ContentApi } from '../../../core/decorators/api';
import { BreakpointService } from '../../responsive/breakpoint.service';
import { Breakpoint } from '../../../core/enums/breakpoint';
import { UI } from '../../../core/enums/ui';
import { I18N_PROVIDERS } from '../../../core/i18n/providers';
import { MenuComponent } from '../../../navigation/menu/menu.component';

const ASIDE_STATE = 'aside_collapsed';

@Component({
  selector: 'jnt-app-aside',
  templateUrl: './app-aside.encapsulated.html',
  providers: [...I18N_PROVIDERS]
})
export class AppAsideComponent implements OnInit {

  @HostBinding('attr.host')
  readonly host = 'jnt-app-aside-host';

  private _collapsed: boolean;
  ui = UI;

  @Input()
  set collapsed(collapsed: boolean) {
    this._collapsed = this.breakpoint.current === Breakpoint.mobile ? false : (collapsed || false);
    localStorage.setItem(ASIDE_STATE, JSON.stringify(collapsed));
  }

  get collapsed() {
    return this._collapsed;
  }

  @ContentApi({
    selector: '#asideContentTemplate',
    description: 'Aside content template'
  })
  @ContentChild('asideContentTemplate', {static: false})
  contentTemplate: TemplateRef<any>;

  @ContentChild(MenuComponent, {static: false})
  menu: MenuComponent;

  @HostBinding('attr.data-opened')
  @Input() opened = false;

  constructor(public breakpoint: BreakpointService,
              public device: DeviceService) {
  }

  ngOnInit() {
    this.collapsed = JSON.parse(localStorage.getItem(ASIDE_STATE));
  }

  toggle() {
    this.opened = !this.opened;
  }

}
