import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../../decorators/api';
import { Size } from '../../../enums/size';
import { FontIcons, TypeIcon } from '../../../enums/ui';

const DEFAULT_ICONSET = 'junte-ui-icons-default';

@Component({
  selector: 'jnt-icon',
  templateUrl: './icon.encapsulated.html',
  styleUrls: ['./icon.encapsulated.scss']
})
export class IconComponent {

  @HostBinding('attr.host') readonly host = 'jnt-icon-host';
  private _icon: string = FontIcons.check;
  typeIcon = TypeIcon;

  @PropertyApi({
    description: 'Icon size',
    path: 'ui.size',
    default: Size.normal,
    options: [Size.tiny,
      Size.small,
      Size.normal,
      Size.large]
  })

  @HostBinding('attr.size')
  @Input()
  size: Size;

  @HostBinding('attr.type')
  type: TypeIcon = TypeIcon.font;
  iconset: string = DEFAULT_ICONSET;

  @PropertyApi({
    description: 'Icon',
    path: 'ui.icons'
  })

  @HostBinding('attr.icon')
  @Input()
  set icon(icon: string) {
    const chunks = icon.split(':');
    this._icon = chunks[0];

    if (chunks.length > 1) {
      this.type = TypeIcon[chunks[1]];
    }

    if (chunks.length > 2) {
      this.iconset = chunks[2];
    }
  }

  get icon() {
    return this._icon;
  }

}
