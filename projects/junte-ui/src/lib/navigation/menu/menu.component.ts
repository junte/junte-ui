import { Component, ContentChildren, EventEmitter, HostBinding, Input, Output, QueryList } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { Feature } from '../../core/enums/feature';
import { Gutter } from '../../core/enums/gutter';
import { Orientation } from '../../core/enums/orientation';
import { Placement } from '../../core/enums/placement';
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
  private _features: Feature[] = [Feature.dropdown];

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
    description: 'Menu popover features',
    type: 'Feature[]',
    default: '[ui.feature.dropdown]'
  })
  @Input()
  set features(features: Feature[]) {
    this._features = !!features && !!features.length ? features : [Feature.dropdown];
  }

  get features() {
    return this._features;
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
