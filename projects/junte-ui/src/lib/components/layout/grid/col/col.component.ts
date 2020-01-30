import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../../../decorators/api';
import { Gutter } from '../../../../enums/ui';

const MOBILE_COLUMNS = 12;
const TABLET_COLUMNS = 6;
const DESKTOP_COLUMNS = 1;
const WIDE_COLUMNS = 1;

@Component({
  selector: 'jnt-col',
  templateUrl: './col.encapsulated.html'
})
export class ColComponent {

  @HostBinding('attr.host') readonly host = 'jnt-col-host';

  @HostBinding('attr.mobile')
  get _mobile() {
    return this.mobile;
  }

  @HostBinding('attr.tablet')
  get _tablet() {
    return this.tablet === TABLET_COLUMNS && this._mobile !== MOBILE_COLUMNS ? this._mobile : this.tablet;
  }

  @HostBinding('attr.desktop')
  get _desktop() {
    return this.desktop === DESKTOP_COLUMNS && this._tablet !== TABLET_COLUMNS ? this._tablet : this.desktop;
  }

  @HostBinding('attr.wide')
  get _wide() {
    return this.wide === WIDE_COLUMNS && this._desktop !== DESKTOP_COLUMNS ? this._desktop : this.wide;
  }

  @HostBinding('attr.padding')
  _padding: Gutter = Gutter.normal;

  @PropertyApi({
    description: 'Number of cells to occupy on screen < 768px',
    type: 'number: 1...12',
    default: '6'
  })
  @Input() mobile = MOBILE_COLUMNS;


  @PropertyApi({
    description: 'Number of cells to occupy on screen >= 768px',
    type: 'number: 1...12',
    default: '3'
  })
  @Input() tablet = TABLET_COLUMNS;


  @PropertyApi({
    description: 'Number of cells to occupy on screen >= 992px',
    type: 'number: 1...12',
    default: '1'
  })
  @Input() desktop = DESKTOP_COLUMNS;


  @PropertyApi({
    description: 'Number of cells to occupy on screen >= 1200px',
    type: 'number: 1...12',
    default: '1'
  })
  @Input() wide = WIDE_COLUMNS;

  @PropertyApi({
    description: 'Number of cells to occupy for all breakpoints',
    type: 'number: 1...12',
    default: 'null'
  })
  @HostBinding('attr.span')
  @Input() span = null;

  @PropertyApi({
    description: 'Padding in column',
    path: 'ui.gutter',
    default: Gutter.normal,
    options: [Gutter.none,
      Gutter.tiny,
      Gutter.small,
      Gutter.normal,
      Gutter.big,
      Gutter.large,
      Gutter.huge]
  })
  @Input() set padding(padding: Gutter) {
    this._padding = padding || Gutter.normal;
  }

}
