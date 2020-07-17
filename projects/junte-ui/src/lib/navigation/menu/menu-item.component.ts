import { Component, ContentChild } from '@angular/core';
import { AbstractMenuItemComponent } from './abstract-menu-item.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';

@Component({
  selector: 'jnt-menu-item',
  template: ''
})
export class MenuItemComponent extends AbstractMenuItemComponent {
  @ContentChild(SubMenuComponent)
  submenu: SubMenuComponent;
}
