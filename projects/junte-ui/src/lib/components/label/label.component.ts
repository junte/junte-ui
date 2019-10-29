import { Component, HostBinding, Input } from '@angular/core';
import { Colors, FontIcons, Sizes } from '../../enum/ui';
import { getTextBrightness } from '../../utils/brightness';

@Component({
  selector: 'jnt-label',
  templateUrl: './label.encapsulated.html'
})
export class LabelComponent {

  @HostBinding('attr.host') readonly host = 'jnt-label-host';

  @HostBinding('attr.label')
  @Input() label: string;

  @HostBinding('attr.icon')
  @Input() icon: FontIcons;

  @HostBinding('style.background-color')
  @Input() color: string = Colors.purpleDark;

  @HostBinding('attr.size')
  @Input()
  size: Sizes = Sizes.normal;

  @HostBinding('style.color')
  get textColor() {
    return getTextBrightness(this.color);
  }
}
