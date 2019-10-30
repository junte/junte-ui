import { Component, HostBinding, Input } from '@angular/core';
import { FontIcons } from '../../../enum/ui';

const DEFAULT_ICONSET = 'junte-ui-icons-default';

@Component({
  selector: 'jnt-font-icon',
  template: '',
  styleUrls: ['./font-icon.encapsulated.scss']
})
export class FontIconComponent {

  @HostBinding('attr.host') readonly host = 'jnt-font-icon-host';

  @HostBinding('attr.icon')
  @Input() icon = FontIcons.check;

  @Input()
  @HostBinding('style.font-family') iconset = DEFAULT_ICONSET;

  @HostBinding('class')
  get class() {
    return `icon-${this.icon}`;
  }

}
