import { AfterContentInit, ContentChildren, Input, QueryList } from '@angular/core';
import { MenuType, Sizes, UI } from '../../enum/ui';
import { MenuItemComponent } from './menu-item/menu-item.component';

export abstract class Menu implements AfterContentInit {

  @Input() type: MenuType = MenuType.horizontal;
  @Input() spacer: Sizes = Sizes.large;

  ui = UI;

  items: MenuItemComponent[] = [];

  @ContentChildren(MenuItemComponent)
  menuItems: QueryList<MenuItemComponent>;

  ngAfterContentInit() {
    this.items = this.menuItems.toArray();
    this.menuItems.changes.subscribe(items => this.items = items.toArray());
  }
}
