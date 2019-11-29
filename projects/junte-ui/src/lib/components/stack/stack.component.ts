import { Component, HostBinding, Input } from '@angular/core';
import { api } from '../../decorators/api';
import { FlexAlign, FlexJustify, FlexWrap, Gutter, StackType } from '../../enum/ui';

@Component({
  selector: 'jnt-stack',
  templateUrl: './stack.encapsulated.html'
})
export class StackComponent {

  @HostBinding('attr.host') readonly host = 'jnt-stack-host';

  @HostBinding('attr.type')
  _type = StackType.vertical;

  @api({
    description: 'Element direction.',
    path: 'ui.stack.type',
    default: StackType.vertical,
    options: [StackType.vertical, StackType.horizontal]
  })
  @Input() set type(type: StackType) {
    if (!!type) {
      this._type = type;
    }
  }

  @api({
    description: 'Space between children elements.',
    path: 'ui.gutter',
    default: Gutter.normal,
    options: [Gutter.tiny, Gutter.small, Gutter.normal, Gutter.big, Gutter.large, Gutter.huge]
  })
  @HostBinding('attr.gutter')
  @Input() gutter: Gutter = Gutter.normal;

  @api({
    description: 'Vertical align of elements.',
    path: 'ui.flex.align',
    default: FlexAlign.start,
    options: [FlexAlign.start, FlexAlign.center, FlexAlign.end, FlexAlign.baseline, FlexAlign.stretch]
  })
  @HostBinding('attr.align')
  @Input()
  align: FlexAlign = FlexAlign.start;

  @api({
    description: 'Horizontal align of elements.',
    path: 'ui.flex.justify',
    default: FlexJustify.start,
    options: [FlexJustify.start, FlexJustify.center, FlexJustify.end, FlexJustify.between,
      FlexJustify.around, FlexJustify.evenly]
  })
  @HostBinding('attr.justify')
  @Input()
  justify: FlexJustify = FlexJustify.start;

  @api({
    description: 'Wrapping of elements.',
    path: 'ui.flex.wrap',
    default: FlexWrap.noWrap,
    options: [FlexWrap.noWrap, FlexWrap.wrap, FlexWrap.reverse]
  })
  @HostBinding('attr.wrap')
  @Input()
  wrap: FlexWrap = FlexWrap.noWrap;

}
