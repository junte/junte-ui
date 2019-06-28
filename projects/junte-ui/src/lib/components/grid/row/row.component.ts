import {Component, HostBinding, Input} from '@angular/core';
import {FlexAlign, FlexAlignContent, FlexDirection, FlexJustify, FlexWrap} from '../../../enum/ui';

@Component({
  selector: 'jnt-row',
  templateUrl: './row.encapsulated.html'
})
export class RowComponent {

  @HostBinding('attr.host') readonly host = 'jnt-row-host';

  @HostBinding('attr.align')
  @Input()
  align: FlexAlign = FlexAlign.stretch;

  @HostBinding('attr.justify')
  @Input()
  justify: FlexJustify = FlexJustify.start;

  @HostBinding('attr.direction')
  @Input()
  direction: FlexDirection = FlexDirection.row;

  @HostBinding('attr.wrap')
  @Input()
  wrap: FlexWrap = FlexWrap.wrap;

  @HostBinding('attr.alignContent')
  @Input()
  alignContent: FlexAlignContent;

}
