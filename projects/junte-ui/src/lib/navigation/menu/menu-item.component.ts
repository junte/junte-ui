import { Component, ContentChildren, EventEmitter, HostBinding, Input, Output, QueryList } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { Scheme } from '../../core/enums/scheme';
import { UI } from '../../core/enums/ui';
import { UrlMatching } from '../../core/enums/url';
import { BadgeComponent } from '../../elements/badge/badge.component';
import { MenuComponent } from './menu.component';

const DEFAULT_TARGET = '_self';

@Component({
  selector: 'jnt-menu-item',
  template: ''
})
export class MenuItemComponent {

  ui = UI;

  _scheme: Scheme = Scheme.primary;

  @HostBinding('attr.opened')
  opened = false;

  @PropertyApi({
    description: 'Icon for menu item',
    type: 'string'
  })
  @Input() icon: string;

  @PropertyApi({
    description: 'Menu item title',
    type: 'string'
  })
  @Input() title: string;

  @PropertyApi({
    description: 'Menu item source',
    type: 'string | string[]'
  })
  @Input() link: string | string[];

  @PropertyApi({
    description: 'Menu item target',
    type: 'string',
    default: '_self',
    options: ['_blank', '_self', '_parent', '_top']
  })
  @Input() target: string = DEFAULT_TARGET;


  @PropertyApi({
    description: 'Methods of matching',
    path: 'ui.url.matching',
    default: UrlMatching.fullMatch,
    options: [UrlMatching.fullMatch,
      UrlMatching.wildcard]
  })
  @Input() matching: UrlMatching = UrlMatching.fullMatch;

  @PropertyApi({
    description: 'Menu item color scheme',
    path: 'ui.schemes',
    default: Scheme.primary,
    options: [
      Scheme.primary,
      Scheme.secondary,
      Scheme.success,
      Scheme.fail
    ]
  })
  @Input() set scheme(scheme: Scheme) {
    this._scheme = scheme || Scheme.primary;
  }

  @PropertyApi({
    description: 'Click event',
    path: 'EventEmitter'
  })
  @Output() click = new EventEmitter<any>();

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;

  @ContentChildren(MenuComponent)
  submenus: QueryList<MenuComponent>;
}
