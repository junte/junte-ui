import { Component, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { BadgeComponent } from '../../elements/badge/badge.component';
import { AbstractMenuItem } from './abstract-menu-item';
import { SubMenuComponent } from './sub-menu/sub-menu.component';

@Component({
  selector: 'jnt-menu-item',
  template: ''
})
export class MenuItemComponent extends AbstractMenuItem {

  @ContentChild(SubMenuComponent)
  submenu: SubMenuComponent;

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;
}
