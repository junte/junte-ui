import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../../core/decorators/api';
import { FlexAlign } from '../../../core/enums/flex';
import { Gutter } from '../../../core/enums/gutter';
import { Orientation } from '../../../core/enums/orientation';
import { UI } from '../../../core/enums/ui';

@Component({
  selector: 'jnt-form-item',
  templateUrl: './form-item.encapsulated.html'
})
export class FormItemComponent {

  @HostBinding('attr.host') readonly host = 'jnt-form-item-host';

  ui = UI;

  _orientation: Orientation = Orientation.vertical;
  _align: FlexAlign = FlexAlign.stretch;
  _gutter: Gutter = Gutter.tiny;

  @PropertyApi({
    description: 'Form item orientation',
    path: 'ui.orientation',
    default: Orientation.vertical,
    options: [Orientation.horizontal, Orientation.vertical]
  })
  @HostBinding('attr.data-orientation')
  @Input() set orientation(type: Orientation) {
    this._orientation = type || Orientation.vertical;
  }

  get orientation() {
    return this._orientation;
  }

  @PropertyApi({
    description: 'Align of elements in form item',
    path: 'ui.align',
    default: FlexAlign.stretch,
    options: [FlexAlign.start,
      FlexAlign.center,
      FlexAlign.end,
      FlexAlign.baseline,
      FlexAlign.stretch]
  })
  @Input() set align(align: FlexAlign) {
    this._align = align || FlexAlign.stretch;
  }

  get align() {
    return this._align;
  }

  @PropertyApi({
    description: 'Space between elements in form item',
    path: 'ui.gutter',
    default: Gutter.tiny,
    options: [Gutter.tiny,
      Gutter.small,
      Gutter.normal,
      Gutter.big,
      Gutter.large,
      Gutter.huge]
  })
  @Input() set gutter(gutter: Gutter) {
    this._gutter = gutter || Gutter.tiny;
  }

  get gutter() {
    return this._gutter;
  }

}
