import { AfterContentInit, ContentChildren, Input, QueryList } from '@angular/core';
import { MenuType, Sizes, UI } from '../../enum/ui';
import { MenuItemComponent } from './menu-item/menu-item.component';

export abstract class Menu {

  @Input() type: MenuType = MenuType.horizontal;
  @Input() spacer: Sizes = Sizes.large;

  ui = UI;

  @ContentChildren(MenuItemComponent)
  items: QueryList<MenuItemComponent>;

}
