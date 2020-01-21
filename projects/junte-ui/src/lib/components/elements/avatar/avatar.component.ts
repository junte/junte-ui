import { Component, HostBinding, Input } from '@angular/core';
import { FontIcons, Shapes, Sizes, UI } from '../../../enums/ui';
import { PropertyApi } from '../../../decorators/api';

@Component({
  selector: 'jnt-avatar',
  templateUrl: './avatar.encapsulated.html'
})
export class AvatarComponent {

  @HostBinding('attr.host') readonly host = 'jnt-avatar-host';

  ui = UI;

  @HostBinding('attr.size')
  _size: Sizes = Sizes.normal;

  @HostBinding('attr.shape')
  _shape: Shapes = Shapes.circle;

  @PropertyApi({
    description: 'Avatar size',
    path: 'ui.sizes',
    default: Sizes.normal,
    options: [Sizes.tiny, Sizes.small, Sizes.normal, Sizes.large]
  })

  @Input() set size(size: Sizes) {
    this._size = size || Sizes.normal;
  }

  @PropertyApi({
    description: 'Avatar shape',
    path: 'ui.shape',
    default: Shapes.circle,
    options: [Shapes.circle, Shapes.square]
  })

  @Input() set shape(shape: Shapes) {
    this._shape = shape || Shapes.circle;
  }

  @PropertyApi({
    description: 'Icon on avatar',
    type: 'string',
    default: 'ui.icons.user',
  })

  @HostBinding('attr.icon')
  @Input() icon: FontIcons = FontIcons.user;

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
