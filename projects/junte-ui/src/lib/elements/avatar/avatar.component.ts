import { Component, ContentChild, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { Shape } from '../../core/enums/shape';
import { Size } from '../../core/enums/size';
import { UI } from '../../core/enums/ui';
import { DotComponent } from '../dot/dot.component';

@Component({
  selector: 'jnt-avatar',
  templateUrl: './avatar.encapsulated.html'
})
export class AvatarComponent {

  @HostBinding('attr.host')
  readonly host = 'jnt-avatar-host';

  ui = UI;

  @HostBinding('attr.data-size')
  _size: Size = Size.normal;

  @HostBinding('attr.data-shape')
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
  @Input()
  set size(size: Size) {
    this._size = size || Size.normal;
  }

  @PropertyApi({
    description: 'Avatar shape',
    path: 'ui.shape',
    default: Shape.circle,
    options: [Shape.circle, Shape.square]
  })
  @Input()
  set shape(shape: Shape) {
    this._shape = shape || Shape.circle;
  }

  @PropertyApi({
    description: 'Icon on avatar',
    type: 'string',
    default: 'ui.icons.user',
  })
  @Input()
  icon: string = UI.icons.user;

  @PropertyApi({
    description: 'First char of name on avatar',
    type: 'string'
  })
  @Input()
  name: string;

  @PropertyApi({
    description: 'First char of surname on avatar',
    type: 'string'
  })
  @Input()
  surname: string;

  @PropertyApi({
    description: 'Image on avatar',
    type: 'string'
  })
  @Input()
  image: string;

  @ContentChild(DotComponent)
  dot: DotComponent;
}
