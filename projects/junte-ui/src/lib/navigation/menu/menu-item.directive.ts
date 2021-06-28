import { ContentChild, Directive } from '@angular/core';
import { AbstractMenuItem } from './abstract-menu-item';
import { SubMenuDirective } from './sub-menu/sub-menu.directive';

@Directive({
  selector: 'jnt-menu-item'
})
export class MenuItemDirective extends AbstractMenuItem {

  @ContentChild(SubMenuDirective)
  submenu: SubMenuDirective;
}
