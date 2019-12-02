import {Component, HostBinding, Input} from '@angular/core';
import {FlexAlign, FlexAlignContent, FlexDirection, FlexJustify, FlexWrap} from '../../../enum/ui';

@Component({
  selector: 'jnt-row',
  templateUrl: './row.encapsulated.html'
})
export class RowComponent {

  @HostBinding('attr.host') readonly host = 'jnt-row-host';

  @HostBinding('attr.align')
  _align: FlexAlign = FlexAlign.start;

  @HostBinding('attr.justify')
  _justify: FlexJustify = FlexJustify.start;

  @HostBinding('attr.direction')
  _direction: FlexDirection = FlexDirection.row;

  @HostBinding('attr.wrap')
  _wrap: FlexWrap = FlexWrap.noWrap;

  @HostBinding('attr.alignContent')
  _alignContent: FlexAlignContent;



  @Input()
  align: FlexAlign = FlexAlign.stretch;

  @Input()
  justify: FlexJustify = FlexJustify.start;

  @HostBinding('attr.direction')
  @Input()
  direction: FlexDirection = FlexDirection.row;

  @Input()
  wrap: FlexWrap = FlexWrap.wrap;

  @Input()
  alignContent: FlexAlignContent;

}
