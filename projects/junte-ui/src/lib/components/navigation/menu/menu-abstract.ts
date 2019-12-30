import { ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { Orientation, Sizes } from '../../../enum/ui';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { PropertyApi } from '../../../decorators/api';

export abstract class Menu {

  @HostBinding('attr.type')
  _type: Orientation = Orientation.horizontal;

  _spacer: Sizes = Sizes.large;

  @PropertyApi({
    description: 'Menu orientation',
    path: 'ui.orientation',
    default: Orientation.horizontal,
    options: [Orientation.horizontal, Orientation.vertical]
  })

  @Input() set type(type: Orientation) {
    if (!!type) {
      this._type = type;
    } else {
      this._type = Orientation.horizontal;
    }
  }

  get type() {
    return this._type;
  }

  @PropertyApi({
    description: 'Size of spacing between menu items',
    path: 'ui.sizes',
    default: Sizes.large,
    options: [Sizes.tiny, Sizes.small, Sizes.normal, Sizes.large]
  })

  @Input() set spacer(spacer: Sizes) {
    if (!!spacer) {
      this._spacer = spacer;
    } else {
      this._spacer = Sizes.large;
    }
  }

  get spacer() {
    return this._spacer;
  }

  @ContentChildren(MenuItemComponent)
  items: QueryList<MenuItemComponent>;

  @ContentChildren(SubmenuComponent)
  submenus: QueryList<SubmenuComponent>;

}
