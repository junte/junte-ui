import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../../decorators/api';
import { Size } from '../../../enums/size';
import { IconType } from './enums';

const DEFAULT_ICONSET = 'junte-ui-icons-default';

@Component({
  selector: 'jnt-icon',
  templateUrl: './icon.encapsulated.html',
  styleUrls: ['./icon.encapsulated.scss']
})
export class IconComponent {

  @HostBinding('attr.host') readonly host = 'jnt-icon-host';

  iconType = IconType;

  _size: Size = Size.normal;

  @HostBinding('attr.icon')
  _icon: string;

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
  type: IconType = IconType.font;
  iconset: string = DEFAULT_ICONSET;

  @PropertyApi({
    description: 'Icon query in special format',
    type: '[name:type:iconset]'
  })
  @Input()
  set icon(query: string) {
    if (!query) {
      throw new Error('Icon query was not passed');
    }

    const [icon, type, iconset] = query.split(':');
    [this._icon, this.type, this.iconset] =
      [icon, type as IconType || IconType.font, iconset || DEFAULT_ICONSET];
  }

}
