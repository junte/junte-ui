import { ContentChildren, Input, QueryList } from '@angular/core';
import { PositionType, Sizes } from '../../enum/ui';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { SubmenuComponent } from './submenu/submenu.component';

export abstract class Menu {

  @Input() type: PositionType = PositionType.horizontal;
  @Input() spacer: Sizes = Sizes.large;

  @ContentChildren(MenuItemComponent)
  items: QueryList<MenuItemComponent>;

  @ContentChildren(SubmenuComponent)
  submenus: QueryList<SubmenuComponent>;

}
