import { Component, HostBinding, Input } from '@angular/core';
import { Colors, Positions } from '../../../enums/ui';
import { getTextBrightness } from '../../../utils/brightness';

@Component({
  selector: 'jnt-badge',
  templateUrl: './badge.encapsulated.html'
})
export class BadgeComponent {

  @HostBinding('attr.host') readonly host = 'jnt-badge-host';

  @Input() count: string;
  @Input() color: string = Colors.purple;

  @HostBinding('attr.position')
  @Input() position: Positions = Positions.rightTop;

  @HostBinding('style.color')
  get textColor() {
    return getTextBrightness(this.color);
  }
}
