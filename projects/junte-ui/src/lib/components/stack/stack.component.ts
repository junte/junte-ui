import { Component, HostBinding, Input } from '@angular/core';
import { StackType, StackGutter, FlexAlign, FlexJustify, FlexDirection, FlexWrap } from '../../enum/ui';

@Component({
  selector: 'jnt-stack',
  templateUrl: './encapsulated.html'
})
export class StackComponent {

  @HostBinding('attr.host') readonly host = 'jnt-stack-host';

  @HostBinding('attr.gutter')
  @Input() gutter: StackGutter = StackGutter.normal;

  @HostBinding('attr.type')
  @Input() type: StackType = StackType.vertical;

  @HostBinding('attr.align')
  @Input()
  align: FlexAlign = FlexAlign.start;

  @HostBinding('attr.justify')
  @Input()
  justify: FlexJustify = FlexJustify.start;

  @HostBinding('attr.wrap')
  @Input()
  wrap: FlexWrap = FlexWrap.noWrap;

}
