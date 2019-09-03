import { Component, HostBinding, Input } from '@angular/core';
import { Icons } from '../../../enum/ui';

@Component({
  selector: 'jnt-font-icon',
  template: '',
  styleUrls: ['./font-icon.component.scss']
})
export class FontIconComponent {

  @Input() icon = Icons.check;

  @HostBinding('class')
  get class() {
    return `icon-${this.icon}`;
  }

}
