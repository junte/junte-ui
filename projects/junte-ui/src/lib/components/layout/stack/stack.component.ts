import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../../decorators/api';
import { FlexAlign, FlexJustify, FlexWrap, Gutter, StackType } from '../../../enums/ui';

@Component({
  selector: 'jnt-stack',
  templateUrl: './stack.encapsulated.html'
})
export class StackComponent {

  @HostBinding('attr.host') readonly host = 'jnt-stack-host';

  @HostBinding('attr.type')
  _type = StackType.vertical;

  @HostBinding('attr.gutter')
  _gutter = Gutter.normal;

  @HostBinding('attr.align')
  _align: FlexAlign = FlexAlign.start;

  @HostBinding('attr.justify')
  _justify: FlexJustify = FlexJustify.start;

  @HostBinding('attr.wrap')
  _wrap: FlexWrap = FlexWrap.noWrap;

  @PropertyApi({
    description: 'Element direction',
    path: 'ui.stack.type',
    default: StackType.vertical,
    options: [StackType.vertical, StackType.horizontal]
  })
  @Input() set type(type: StackType) {
    if (!!type) {
      this._type = type;
    } else {
      this._type = StackType.vertical;
    }
  }

  @PropertyApi({
    description: 'Space between children elements',
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
    if (!!gutter) {
      this._gutter = gutter;
    } else {
      this._gutter = Gutter.normal;
    }
  }

  @PropertyApi({
    description: 'Vertical align of elements',
    path: 'ui.flex.align',
    default: FlexAlign.start,
    options: [FlexAlign.start,
      FlexAlign.center,
      FlexAlign.end,
      FlexAlign.baseline,
      FlexAlign.stretch]
  })
  @Input() set align(align: FlexAlign) {
    if (!!align) {
      this._align = align;
    } else {
      this._align = FlexAlign.start;
    }
  }

  @PropertyApi({
    description: 'Horizontal align of elements',
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
    if (!!justify) {
      this._justify = justify;
    } else {
      this._justify = FlexJustify.start;
    }
  }

  @PropertyApi({
    description: 'Wrapping of elements',
    path: 'ui.flex.wrap',
    default: FlexWrap.noWrap,
    options: [FlexWrap.noWrap,
      FlexWrap.wrap,
      FlexWrap.reverse]
  })
  @Input() set wrap(wrap: FlexWrap) {
    if (!!wrap) {
      this._wrap = wrap;
    } else {
      this._wrap = FlexWrap.noWrap;
    }
  }

}
