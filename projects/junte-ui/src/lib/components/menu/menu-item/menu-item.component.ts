import {Component, Input} from '@angular/core';
import {Icons} from '../../../enum/ui';

@Component({
  selector: 'jnt-menu-item',
  template: ''
})
export class MenuItemComponent {

  @Input() icon: Icons;
  @Input() title: string;
  @Input() link: string;
  @Input() badge: number;

}
