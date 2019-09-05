import { Component, HostBinding, Input } from '@angular/core';
import { FontIcons } from '../../../enum/ui';

const DEFAULT_ICONSET = 'icons';

@Component({
  selector: 'jnt-font-icon',
  template: '',
  styleUrls: ['./font-icon.component.scss']
})
export class FontIconComponent {

  @Input() icon = FontIcons.check;

  @Input()
  @HostBinding('style.font-family') iconset = DEFAULT_ICONSET;

  @HostBinding('class')
  get class() {
    return `icon-${this.icon}`;
  }

}
