import { Component, Input } from '@angular/core';
import { Icons, Schemes } from '../../../enum/ui';

@Component({
  selector: 'jnt-menu-item',
  template: ''
})
export class MenuItemComponent {

  @Input() icon: Icons;
  @Input() title: string;
  @Input() link: string;
  @Input() click: Function;
  @Input() badge: number;
  @Input() scheme: Schemes = Schemes.primary;

}
