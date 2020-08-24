import { Component, ContentChild, ContentChildren, Input, QueryList } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { BadgeComponent } from '../../elements/badge/badge.component';
import { AbstractMenuItemComponent } from './abstract-menu-item.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';

@Component({
  selector: 'jnt-menu-item',
  template: ''
})
export class MenuItemComponent extends AbstractMenuItemComponent {

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
  @Input() disabled = false;

  @ContentChild(SubMenuComponent)
  submenu: SubMenuComponent;

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;
}
