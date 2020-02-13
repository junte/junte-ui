import { ContentChildren, forwardRef, HostBinding, Input, QueryList } from '@angular/core';
import { PropertyApi } from '../../../decorators/api';
import { Orientation } from '../../../enums/orientation';
import { Size } from '../../../enums/size';
import { MenuItemComponent } from './menu-item/menu-item.component';

export abstract class Menu {

  @HostBinding('attr.type')
  _type: Orientation = Orientation.horizontal;

  _spacer: Size = Size.normal;

  @HostBinding('attr.collapsed')
  @Input() collapsed = false;

  @PropertyApi({
    description: 'Menu orientation',
    path: 'ui.orientation',
    default: Orientation.horizontal,
    options: [Orientation.horizontal, Orientation.vertical]
  })

  @Input() set type(type: Orientation) {
    this._type = type || Orientation.horizontal;
  }

  get type() {
    return this._type;
  }

  @PropertyApi({
    description: 'Size of spacing between menu items',
    path: 'ui.size',
    default: Size.large,
    options: [Size.tiny, Size.small, Size.normal, Size.large]
  })

  @Input() set spacer(spacer: Size) {
    if (!!spacer) {
      this._spacer = spacer;
    } else {
      this._spacer = Size.normal;
    }
  }

  get spacer() {
    return this._spacer;
  }

  @ContentChildren(forwardRef(() => MenuItemComponent))
  items: QueryList<MenuItemComponent>;
}
