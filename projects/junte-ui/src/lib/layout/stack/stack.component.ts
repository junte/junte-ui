import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { FlexAlign, FlexJustify, FlexWrap } from '../../core/enums/flex';
import { Gutter } from '../../core/enums/gutter';
import { StackType } from './enums';

@Component({
  selector: 'jnt-stack',
  templateUrl: './stack.encapsulated.html'
})
export class StackComponent {

  @HostBinding('attr.host') readonly host = 'jnt-stack-host';

  @HostBinding('attr.data-type')
  _type = StackType.vertical;

  @HostBinding('attr.data-gutter')
  _gutter = Gutter.normal;

  @HostBinding('attr.data-align')
  _align: FlexAlign = FlexAlign.start;

  @HostBinding('attr.data-justify')
  _justify: FlexJustify = FlexJustify.start;

  @HostBinding('attr.data-wrap')
  _wrap: FlexWrap = FlexWrap.noWrap;

  @PropertyApi({
    description: 'Defined main axis of elements align',
    path: 'ui.layout.stack.type',
    default: StackType.vertical,
    options: [StackType.vertical, StackType.horizontal]
  })
  @Input() set type(type: StackType) {
    this._type = type || StackType.vertical;
  }

  @PropertyApi({
    description: 'Space between elements in main axis',
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

  @PropertyApi({
    description: 'Align of elements in main axis',
    path: 'ui.flex.align',
    default: FlexAlign.start,
    options: [FlexAlign.start,
      FlexAlign.center,
      FlexAlign.end,
      FlexAlign.baseline,
      FlexAlign.stretch]
  })
  @Input() set align(align: FlexAlign) {
    this._align = align || FlexAlign.start;
  }

  @PropertyApi({
    description: 'Align of elements in secondary axis',
    path: 'ui.flex.justify',
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
    description: 'Wrapping of elements in main axis',
    path: 'ui.flex.wrap',
    default: FlexWrap.noWrap,
    options: [FlexWrap.noWrap,
      FlexWrap.wrap,
      FlexWrap.reverse]
  })
  @Input() set wrap(wrap: FlexWrap) {
    this._wrap = wrap || FlexWrap.noWrap;
  }

}
