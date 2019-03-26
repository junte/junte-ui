import { Component, HostBinding, Input } from '@angular/core';
import { StackType, StackGutter, FlexAlign, FlexJustify, FlexDirection, FlexWrap } from '../../enum/ui';

@Component({
  selector: 'jnt-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent {

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
