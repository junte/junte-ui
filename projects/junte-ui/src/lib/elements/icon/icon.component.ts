import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { Size } from '../../core/enums/size';
import { IconType } from './enums';

const DEFAULT_ICONSET = 'junte-ui-icons-default';

@Component({
  selector: 'jnt-icon',
  templateUrl: './icon.encapsulated.html'
})
export class IconComponent {

  @HostBinding('attr.host') readonly host = 'jnt-icon-host';

  iconType = IconType;

  @HostBinding('attr.size')
  _size: Size = Size.auto;

  @HostBinding('attr.icon')
  _icon: string;

  @PropertyApi({
    description: 'Icon size',
    path: 'ui.size',
    default: Size.auto,
    options: [Size.tiny,
      Size.small,
      Size.normal,
      Size.large
    ]
  })
  @Input()
  set size(size: Size) {
    this._size = size || Size.auto;
  }

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
