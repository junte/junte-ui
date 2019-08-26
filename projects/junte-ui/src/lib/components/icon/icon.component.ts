import { Component, HostBinding, Input } from '@angular/core';
import { Icons } from '../../enum/ui';

@Component({
  selector: 'jnt-icon',
  template: ''
})
export class IconComponent {

  @HostBinding('attr.host') readonly host = 'jnt-icon-host';

  @Input()
  icon: Icons = Icons.check;

  @HostBinding('class')
  get class() {
    return `icon-${this.icon}`;
  }

  @Input()
  @HostBinding('style.font-family') font = 'icons';

}
