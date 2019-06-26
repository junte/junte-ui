import { Component, HostBinding, Input } from '@angular/core';
import { Colors, Icons } from '../../enum/ui';

const LIGHT_COLOR = '#FFF';
const DARK_COLOR = '#4F4F4F';
const RATIO_BRIGHTNESS = 150;
const RATIO_RGB = [299, 587, 114];

@Component({
  selector: 'jnt-label',
  templateUrl: './label.encapsulated.html'
})
export class LabelComponent {

  @HostBinding('attr.host') readonly host = 'jnt-label-host';

  @HostBinding('attr.label')
  @Input() label: string;

  @HostBinding('attr.icon')
  @Input() icon: Icons;

  @HostBinding('style.background-color')
  @Input() color: string = Colors.purpleDark;

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
