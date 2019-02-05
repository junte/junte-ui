import {Component, HostBinding, Input} from '@angular/core';
import {StackType, StackGutter} from '../../enum/ui';

@Component({
  selector: 'ju-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent {

  @HostBinding('attr.gutter')
  @Input() gutter:  StackGutter = StackGutter.normal;

  @HostBinding('attr.type')
  @Input() type: StackType = StackType.vertical;
}
