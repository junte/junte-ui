import { Component, HostBinding, Input } from '@angular/core';
import { Icons } from '../../enum/ui';

@Component({
  selector: 'jnt-icon',
  template: ''
})
export class IconComponent {

  private _icon: string = Icons.check;
  @HostBinding('attr.host') readonly host = 'jnt-icon-host';
  @HostBinding('style.font-family') font = 'icons';

  @Input()
  set icon(icon: string) {
    const separator = icon.indexOf(':');
    if (separator > -1) {
      this.font = icon.substring(0, separator);
      this._icon = icon.substring(separator + 1, icon.length);
    } else {
      this._icon = icon;
    }
  }

  get icon() {
    return this._icon;
  }

  @HostBinding('class')
  get class() {
    return `icon-${this.icon}`;
  }

}
