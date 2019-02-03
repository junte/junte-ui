import {Component, HostBinding, Input} from '@angular/core';
import {FlexAlignSelf} from '../../enum/ui';

@Component({
  selector: 'ju-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.scss']
})
export class ColComponent {

  @HostBinding('attr.span')
  @Input() span: number = null;

  @HostBinding('attr.alignSelf')
  @Input()
  alignSelf: FlexAlignSelf = FlexAlignSelf.auto;

  @HostBinding('attr.order')
  @Input() order: number = null;

}
