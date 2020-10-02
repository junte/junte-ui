import { Component, ContentChild, ContentChildren, Input, QueryList } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { BadgeComponent } from '../../elements/badge/badge.component';
import { AbstractMenuItem } from './abstract-menu-item';
import { SubMenuComponent } from './sub-menu/sub-menu.component';

@Component({
  selector: 'jnt-menu-item',
  template: ''
})
export class MenuItemComponent extends AbstractMenuItem {

  @PropertyApi({
    description: 'Loading for menu item',
    default: 'false',
    type: 'boolean'
  })
  @Input()
  loading = false;

  @PropertyApi({
    description: 'Disable menu item',
    type: 'boolean',
    default: 'false'
  })
  @Input()
  disabled = false;

  @ContentChild(SubMenuComponent)
  submenu: SubMenuComponent;

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;
}
