import { Component, HostBinding, Input } from '@angular/core';
import { FlexAlign, FlexJustify } from '../../../core/enums/flex';
import { PropertyApi } from '../../../core/decorators/api';
import { Gutter } from '../../../core/enums/gutter';

@Component({
  selector: 'jnt-row',
  templateUrl: './row.encapsulated.html'
})
export class RowComponent {

  @HostBinding('attr.host') readonly host = 'jnt-row-host';

  @HostBinding('attr.data-align')
  _align: FlexAlign = FlexAlign.start;

  @HostBinding('attr.data-gutter')
  _gutter: Gutter = Gutter.small;

  @HostBinding('attr.data-spacing')
  _spacing: Gutter = Gutter.normal;

  @HostBinding('attr.data-justify')
  _justify: FlexJustify = FlexJustify.start;

  @PropertyApi({
    description: 'Vertical align columns',
    path: 'ui.align',
    default: FlexAlign.start,
    options: [FlexAlign.start,
      FlexAlign.center,
      FlexAlign.end,
      FlexAlign.stretch]
  })
  @Input() set align(align: FlexAlign) {
    this._align = align || FlexAlign.start;
  }

  @PropertyApi({
    description: 'Horizontal align of elements',
    path: 'ui.justify',
    default: FlexJustify.start,
    options: [FlexJustify.start,
      FlexJustify.center,
      FlexJustify.end,
      FlexJustify.between,
      FlexJustify.around,
      FlexJustify.evenly]
  })
  @Input() set justify(justify: FlexJustify) {
    this._justify = justify || FlexJustify.start;
  }

  @PropertyApi({
    description: 'Spacing between columns while wrapping',
    path: 'ui.gutter',
    default: Gutter.normal,
    options: [Gutter.tiny,
      Gutter.small,
      Gutter.normal,
      Gutter.big,
      Gutter.large,
      Gutter.huge]
  })
  @Input() set spacing(spacing: Gutter) {
    this._spacing = spacing || Gutter.normal;
  }

  @PropertyApi({
    description: 'Padding in column',
    path: 'ui.gutter',
    default: Gutter.small,
    options: [Gutter.none,
      Gutter.tiny,
      Gutter.small,
      Gutter.normal,
      Gutter.big,
      Gutter.large,
      Gutter.huge]
  })
  @Input() set gutter(gutter: Gutter) {
    this._gutter = gutter || Gutter.small;
  }
}
