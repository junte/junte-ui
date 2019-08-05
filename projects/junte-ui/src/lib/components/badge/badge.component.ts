import { Component, HostBinding, Input } from '@angular/core';
import { Colors, Positions } from '../../enum/ui';

const LIGHT_COLOR = '#FFF';
const DARK_COLOR = '#4F4F4F';
const RATIO_BRIGHTNESS = 150;
const RATIO_RGB = [299, 587, 114];

@Component({
  selector: 'jnt-badge',
  templateUrl: './badge.encapsulated.html'
})
export class BadgeComponent {

  @HostBinding('attr.host') readonly host = 'jnt-badge-host';

  @Input()
  count: string;

  @HostBinding('attr.position')
  @Input()
  position: Positions = Positions.rightTop;

  @Input() color: string = Colors.purple;

  @HostBinding('style.color')
  get textColor() {
    return this.brightness(this.color) >= RATIO_BRIGHTNESS ? DARK_COLOR : LIGHT_COLOR;
  }

  constructor() {
  }

  private brightness(color: string): number {
    color = color.substr(1);
    if (color.length === 3) {
      color = color.split('').map(v => v + v).join('');
    }

    const rgb = [0, 0, 0];
    return rgb.map((v, i) => (RATIO_RGB[i] * parseInt(color.substr(i * 2, 2), 16)) / 1000)
      .reduce((a, c) => a + c);
  }

}
