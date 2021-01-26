import { trigger, style, state, transition, animate } from '@angular/animations';
import { Component, ContentChildren, EventEmitter, HostBinding, Input, Output, QueryList } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { Gutter } from '../../core/enums/gutter';
import { Orientation } from '../../core/enums/orientation';
import { Placement } from '../../core/enums/placement';
import { MenuStyle } from '../../core/enums/style';
import { UI } from '../../core/enums/ui';
import { PopoverInstance } from '../../overlays/popover/popover.service';
import { MenuItemComponent } from './menu-item.component';

@Component({
  selector: 'jnt-menu',
  templateUrl: './menu.encapsulated.html',
  animations: [
    trigger('collapse', [
      state('void', style({height: 0, opacity: '0'})),
      state('*', style({height: '*', opacity: '1'})),
      transition('void <=> *', [animate('.3s ease')])
    ])
  ]
})
export class MenuComponent {

  @HostBinding('attr.host') readonly host = 'jnt-menu-host';

  ui = UI;

  private _spacing: Gutter = Gutter.none;
  private _placement: Placement = Placement.absolute;

  reference: { popover: PopoverInstance } = {popover: null};

  @HostBinding('attr.data-style')
  _style: MenuStyle = MenuStyle.default;

  @HostBinding('attr.data-orientation')
  _orientation: Orientation = Orientation.horizontal;

  @HostBinding('attr.data-collapsed')
  @Input()
  collapsed = false;

  @PropertyApi({
    description: 'Menu style',
    path: 'ui.menu.style',
    default: MenuStyle.default,
    options: [MenuStyle.tabs, MenuStyle.tags, MenuStyle.default]
  })
  @Input()
  set style(style: MenuStyle) {
    this._style = style || MenuStyle.default;
  }

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

  @Input()
  context: string;

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
