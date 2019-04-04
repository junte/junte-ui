import {Component, HostBinding, Input} from '@angular/core';
import {Icons, Schemes} from '../../enum/ui';

@Component({
  selector: 'jnt-icon',
  template: ''
})
export class IconComponent {

  @HostBinding('attr.host') readonly host = 'jnt-icon-host';

  @Input()
  icon: Icons = Icons.check;

  @Input()
  scheme: Schemes;

  @HostBinding('class')
  get class() {
    return `icon-${this.icon}`;
  }

}
