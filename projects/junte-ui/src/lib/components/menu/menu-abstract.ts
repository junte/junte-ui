import { ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { MenuType, Sizes } from '../../enum/ui';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { SubmenuComponent } from './submenu/submenu.component';

export abstract class Menu {

  @Input() type: MenuType = MenuType.horizontal;
  @Input() spacer: Sizes = Sizes.large;

  @ContentChildren(MenuItemComponent)
  items: QueryList<MenuItemComponent>;

  @ContentChildren(SubmenuComponent)
  submenus: QueryList<SubmenuComponent>;

}
