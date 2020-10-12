import { Component, ContentChild, HostBinding, Input, OnInit, TemplateRef } from '@angular/core';
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

  @HostBinding('attr.host') readonly host = 'jnt-app-aside-host';

  private _collapsed: boolean;
  ui = UI;

  @Input()
  set collapsed(collapsed: boolean) {
    this._collapsed = collapsed || false;
    localStorage.setItem(ASIDE_STATE, JSON.stringify(collapsed));
  }

  get collapsed() {
    return this._collapsed;
  }

  @ContentChild('asideContentTemplate', {static: false})
  contentTemplate: TemplateRef<any>;

  @ContentChild(MenuComponent, {static: false})
  menu: MenuComponent;

  @HostBinding('attr.data-opened')
  @Input() opened = false;

  ngOnInit() {
    this.collapsed = JSON.parse(localStorage.getItem(ASIDE_STATE));
  }

  toggle() {
    this.opened = !this.opened;
  }

}
