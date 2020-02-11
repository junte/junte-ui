import { Component, HostBinding, Input } from '@angular/core';
import { Shape } from '../../../enums/shape';
import { Size } from '../../../enums/size';
import { PropertyApi } from '../../../decorators/api';
import { UI } from '../../../enums/ui';

@Component({
  selector: 'jnt-avatar',
  templateUrl: './avatar.encapsulated.html'
})
export class AvatarComponent {

  @HostBinding('attr.host') readonly host = 'jnt-avatar-host';

  ui = UI;

  @HostBinding('attr.size')
  _size: Size = Size.normal;

  @HostBinding('attr.shape')
  _shape: Shape = Shape.circle;

  @PropertyApi({
    description: 'Avatar size',
    path: 'ui.size',
    default: Size.normal,
    options: [Size.tiny,
      Size.small,
      Size.normal,
      Size.large]
  })

  @Input() set size(size: Size) {
    this._size = size || Size.normal;
  }

  @PropertyApi({
    description: 'Avatar shape',
    path: 'ui.shape',
    default: Shape.circle,
    options: [Shape.circle, Shape.square]
  })

  @Input() set shape(shape: Shape) {
    this._shape = shape || Shape.circle;
  }

  @PropertyApi({
    description: 'Icon on avatar',
    type: 'string',
    default: 'ui.icons.user',
  })

  @HostBinding('attr.icon')
  @Input() icon: string = UI.icons.font.user;

  @PropertyApi({
    description: 'Text on avatar',
    type: 'string'
  })

  @HostBinding('attr.text')
  @Input() text: string;

  @PropertyApi({
    description: 'Image on avatar',
    type: 'string'
  })

  @HostBinding('attr.image')
  @Input() image: string;

}
