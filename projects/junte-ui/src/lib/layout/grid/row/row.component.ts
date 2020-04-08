import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../../core/decorators/api';
import { Gutter } from '../../../core/enums/gutter';
import { RowAlign } from '../enums';

@Component({
  selector: 'jnt-row',
  templateUrl: './row.encapsulated.html'
})
export class RowComponent {

  @HostBinding('attr.host') readonly host = 'jnt-row-host';

  @HostBinding('attr.data-align')
  _align: RowAlign = RowAlign.start;

  @HostBinding('attr.data-gutter')
  _gutter: Gutter = Gutter.normal;

  @PropertyApi({
    description: 'Vertical align columns',
    path: 'ui.layout.row.align',
    default: RowAlign.start,
    options: [RowAlign.start,
      RowAlign.center,
      RowAlign.end,
      RowAlign.stretch]
  })
  @Input() set align(align: RowAlign) {
    this._align = align || RowAlign.start;
  }

  @PropertyApi({
    description: 'Top margin of columns while wrapping',
    path: 'ui.gutter',
    default: Gutter.normal,
    options: [Gutter.tiny,
      Gutter.small,
      Gutter.normal,
      Gutter.big,
      Gutter.large,
      Gutter.huge]
  })
  @Input() set gutter(gutter: Gutter) {
    this._gutter = gutter || Gutter.normal;
  }

}
