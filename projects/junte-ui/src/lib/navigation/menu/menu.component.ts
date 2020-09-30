import { Component, ContentChildren, EventEmitter, HostBinding, Input, Output, QueryList } from '@angular/core';
import { Placement } from '../../core/enums/placement';
import { PropertyApi } from '../../core/decorators/api';
import { Gutter } from '../../core/enums/gutter';
import { Orientation } from '../../core/enums/orientation';
import { UI } from '../../core/enums/ui';
import { MenuItemComponent } from './menu-item.component';

@Component({
  selector: 'jnt-menu',
  templateUrl: './menu.encapsulated.html'
})
export class MenuComponent {

  @HostBinding('attr.host') readonly host = 'jnt-menu-host';

  ui = UI;
  orientationEnum = Orientation;

  private _spacing: Gutter = Gutter.none;
  private _placement: Placement = Placement.absolute;
  private _smarty: boolean = true;

  @HostBinding('attr.data-orientation')
  _orientation: Orientation = Orientation.horizontal;

  @HostBinding('attr.data-collapsed')
  @Input()
  collapsed = false;

  @PropertyApi({
    description: 'Menu orientation',
    path: 'ui.orientation',
    default: Orientation.horizontal,
    options: [Orientation.horizontal, Orientation.vertical]
  })
  @Input()
  set orientation(orientation: Orientation) {
    this._orientation = orientation || Orientation.horizontal;
  }

  get orientation() {
    return this._orientation;
  }

  @PropertyApi({
    description: 'Menu popover placement',
    path: 'ui.placement',
    default: Placement.absolute,
    options: [Placement.absolute, Placement.fixed]
  })
  @Input()
  set placement(placement: Placement) {
    this._placement = placement || Placement.absolute;
  }

  get placement() {
    return this._placement;
  }

  @PropertyApi({
    description: 'Menu popover smarty',
    type: 'boolean',
    default: 'true'
  })
  @Input()
  set smarty(smarty: boolean) {
    this._smarty = smarty !== undefined && smarty !== null ? smarty : true;
  }

  get smarty() {
    return this._smarty;
  }

  @PropertyApi({
    description: 'Size of spacing between menu items',
    path: 'ui.gutter',
    default: Gutter.none,
    options: [Gutter.none, Gutter.tiny, Gutter.small, Gutter.normal, Gutter.large, Gutter.big, Gutter.huge]
  })
  @Input()
  set spacing(spacing: Gutter) {
    this._spacing = spacing || Gutter.none;
  }

  get spacing() {
    return this._spacing;
  }

  @Output()
  selected = new EventEmitter<MenuItemComponent>();

  @ContentChildren(MenuItemComponent)
  items: QueryList<MenuItemComponent>;

  toggle(item: MenuItemComponent) {
    if (!!item.submenu) {
      this.items.forEach(i => i.opened = i === item ? !item.opened : false);
    }
  }
}
