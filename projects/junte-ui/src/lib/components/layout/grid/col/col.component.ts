import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../../../decorators/api';

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

  @HostBinding('attr.tablet')
  get _tablet() {
    return this.tablet === TABLET_COLUMNS && this.mobile !== MOBILE_COLUMNS ? this.mobile : this.tablet;
  }

  @HostBinding('attr.desktop')
  get _desktop() {
    return this.desktop === DESKTOP_COLUMNS && this.tablet !== TABLET_COLUMNS ? this.tablet : this.desktop;
  }

  @HostBinding('attr.wide')
  get _wide() {
    return this.wide === WIDE_COLUMNS && this.desktop !== DESKTOP_COLUMNS ? this.desktop : this.wide;
  }

  @PropertyApi({
    description: 'Number of cells to occupy on screen resolution < 768px',
    type: 'number: 1...12',
    default: '6'
  })
  @HostBinding('attr.mobile')
  @Input() mobile = MOBILE_COLUMNS;


  @PropertyApi({
    description: 'Number of cells to occupy on screen resolution >= 768px',
    type: 'number: 1...12',
    default: '3'
  })
  @Input() tablet = TABLET_COLUMNS;


  @PropertyApi({
    description: 'Number of cells to occupy on screen resolution >= 992px',
    type: 'number: 1...12',
    default: '1'
  })
  @Input() desktop = DESKTOP_COLUMNS;


  @PropertyApi({
    description: 'Number of cells to occupy on screen resolution >= 1200px',
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

}
