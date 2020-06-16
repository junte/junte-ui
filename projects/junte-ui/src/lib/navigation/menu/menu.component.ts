import { Component, ContentChildren, EventEmitter, forwardRef, HostBinding, Input, Output, QueryList } from '@angular/core';
import { Gutter } from '../../core/enums/gutter';
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

  @HostBinding('attr.data-orientation')
  _orientation: Orientation = Orientation.horizontal;

  _spacer: Gutter = Gutter.none;

  @HostBinding('attr.data-collapsed')
  @Input() collapsed = false;

  @PropertyApi({
    description: 'Menu orientation',
    path: 'ui.orientation',
    default: Orientation.horizontal,
    options: [Orientation.horizontal, Orientation.vertical]
  })
  @Input() set orientation(orientation: Orientation) {
    this._orientation = orientation || Orientation.horizontal;
  }

  get orientation() {
    return this._orientation;
  }

  @PropertyApi({
    description: 'Size of spacing between menu items',
    path: 'ui.gutter',
    default: Gutter.none,
    options: [Gutter.none, Gutter.tiny, Gutter.small, Gutter.normal, Gutter.large, Gutter.big, Gutter.huge]
  })
  @Input()
  set spacer(spacer: Gutter) {
    this._spacer = spacer || Gutter.none;
  }

  get spacer() {
    return this._spacer;
  }

  @Output()
  selected = new EventEmitter<MenuItemComponent>();

  @ContentChildren(forwardRef(() => MenuItemComponent))
  items: QueryList<MenuItemComponent>;

  open(item: MenuItemComponent) {
    if (item.submenu) {
      this.items.forEach(i => i.opened = i === item ? !item.opened : false);
    }
  }
}
