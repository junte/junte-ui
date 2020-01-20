import { Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { Matching, UI } from '../../../../enums/ui';
import { BadgeComponent } from '../../../elements/badge/badge.component';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { PropertyApi } from '../../../../decorators/api';

@Component({
  selector: 'jnt-submenu',
  template: '',
})
export class SubmenuComponent {

  ui = UI;
  opened = false;

  @PropertyApi({
    description: 'Icon for submenu title',
    type: 'string'
  })

  @Input() icon: string;

  @PropertyApi({
    description: 'Submenu title',
    type: 'string'
  })
  @Input() title: string;

  @PropertyApi({
    description: 'Methods of matching',
    path: 'ui.url.matching',
    default: Matching.fullMatch,
    options: [Matching.fullMatch, Matching.wildcard]
  })

  @Input() matching: Matching = Matching.fullMatch;

  @PropertyApi({
    description: 'Click event',
    path: 'EventEmitter'
  })
  @Output() click = new EventEmitter<any>();

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;

  @ContentChildren(MenuItemComponent)
  menuItems: QueryList<MenuItemComponent>;

}
