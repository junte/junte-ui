import {Component, HostBinding, Input} from '@angular/core';
import {FlexAlignSelf} from '../../../enum/ui';

@Component({
  selector: 'jnt-col',
  templateUrl: './col.encapsulated.html'
})
export class ColComponent {

  @HostBinding('attr.host') readonly host = 'jnt-col-host';

  @HostBinding('attr.span')
  @Input() span: number = 1;

  @HostBinding('attr.mobile')
  @Input() mobile: number = null;

  @HostBinding('attr.tablet')
  @Input() tablet: number = null;

  @HostBinding('attr.desktop')
  @Input() desktop: number = null;

  @HostBinding('attr.wide')
  @Input() wide: number = null;

  @HostBinding('attr.alignSelf')
  @Input()
  alignSelf: FlexAlignSelf = FlexAlignSelf.auto;

  @HostBinding('attr.order')
  @Input() order: number = null;

}
