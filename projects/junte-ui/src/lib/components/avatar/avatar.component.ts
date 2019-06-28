import { Component, HostBinding, Input } from '@angular/core';
import { Icons, Shapes, Sizes, UI } from '../../enum/ui';

@Component({
  selector: 'jnt-avatar',
  templateUrl: './avatar.encapsulated.html'
})
export class AvatarComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-avatar-host';

  @HostBinding('attr.size')
  @Input() size: Sizes = Sizes.normal;

  @HostBinding('attr.shape')
  @Input() shape: Shapes = Shapes.circle;

  @HostBinding('attr.icon')
  @Input() icon: Icons = Icons.user;

  @HostBinding('attr.text')
  @Input() text: string;

  @HostBinding('attr.image')
  @Input() image: string;

  constructor() {
  }

}
