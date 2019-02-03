import {Component, HostBinding, Input} from '@angular/core';
import {FlexAlignSelf} from '../../enum/ui';

@Component({
  selector: 'ju-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent {

  @HostBinding('attr.gutter')
  @Input() gutter: number;

}
