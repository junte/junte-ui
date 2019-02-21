import {Component, HostBinding, Input} from '@angular/core';
import {Icons, Schemes} from '../../enum/ui';

@Component({
  selector: 'jnt-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {

  @Input()
  icon: Icons = Icons.check;

  @Input()
  scheme: Schemes;

  @HostBinding('class')
  get class() {
    return `icon-${this.icon}`;
  }

}
