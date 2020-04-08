import { Component, ContentChildren, EventEmitter, forwardRef, HostBinding, Input, Output, QueryList } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { Orientation } from '../../core/enums/orientation';
import { Size } from '../../core/enums/size';
import { UI } from '../../core/enums/ui';
import { MenuItemComponent } from './menu-item.component';

@Component({
  selector: 'jnt-menu',
  templateUrl: './menu.encapsulated.html'
})
export class MenuComponent {

  @HostBinding('attr.host') readonly host = 'jnt-menu-host';

  ui = UI;

  @HostBinding('attr.data-type')
  _type: Orientation = Orientation.horizontal;

  _spacer: Size = Size.normal;

  @HostBinding('attr.data-collapsed')
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
  @Input()
  set spacer(spacer: Size) {
    this._spacer = spacer || Size.normal;
  }

  get spacer() {
    return this._spacer;
  }

  @Output()
  selected = new EventEmitter<MenuItemComponent>();

  @ContentChildren(forwardRef(() => MenuItemComponent))
  items: QueryList<MenuItemComponent>;

  open(item: MenuItemComponent) {
    if (item.submenus.length) {
      this.items.forEach(i => i.opened = i === item ? !item.opened : false);
    }
  }
}
