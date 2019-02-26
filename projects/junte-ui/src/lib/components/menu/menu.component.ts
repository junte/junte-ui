import {AfterContentInit, Component, ContentChildren, Input, QueryList} from '@angular/core';
import {MenuItemComponent} from './menu-item/menu-item.component';
import {Icons, MenuType, UI} from '../../enum/ui';

@Component({
  selector: 'jnt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterContentInit {

  @Input() type: MenuType = MenuType.horizontal;

  ui = UI;

  items: MenuItemComponent[] = [];

  @ContentChildren(MenuItemComponent)
  menuItems: QueryList<MenuItemComponent>;

  constructor() {
  }

  ngAfterContentInit() {
    this.items = this.menuItems.toArray();
    this.menuItems.changes.subscribe(items => this.items = items.toArray());
  }

}
