import { Component, ContentChild } from '@angular/core';
import { AbstractMenuItem } from './abstract-menu-item';
import { SubMenuComponent } from './sub-menu/sub-menu.component';

@Component({
  selector: 'jnt-menu-item',
  template: ''
})
export class MenuItemComponent extends AbstractMenuItem {

  @ContentChild(SubMenuComponent)
  submenu: SubMenuComponent;
}
