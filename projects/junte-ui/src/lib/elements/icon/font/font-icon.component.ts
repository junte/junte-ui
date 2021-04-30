import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../../core/decorators/api';

const DEFAULT_ICONSET = 'junte-ui-icons-default';

@Component({
  selector: 'jnt-font-icon',
  template: ''
})
export class FontIconComponent {

  @HostBinding('attr.host') readonly host = 'jnt-font-icon-host';

  @HostBinding('attr.data-icon')
  @Input()
  icon: string;

  @HostBinding('style.font-family')
  @Input()
  iconset = DEFAULT_ICONSET;

  @HostBinding('class')
  get class() {
    return `${this.iconset}-${this.icon}`;
  }

  @PropertyApi({
    description: 'Color for icon',
    type: '[ui.color]'
  })
  @Input()
  color = null;
}
