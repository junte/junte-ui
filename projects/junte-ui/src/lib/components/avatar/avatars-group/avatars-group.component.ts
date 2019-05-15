import {Component, ContentChildren, HostBinding, Input, QueryList} from '@angular/core';
import {AvatarComponent} from '../avatar.component';
import {Shapes, Sizes, UI} from '../../../enum/ui';

@Component({
  selector: 'jnt-avatars-group',
  templateUrl: './encapsulated.html'
})
export class AvatarsGroupComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-avatars-group-host';

  @HostBinding('attr.name')
  @Input() name: string;

  @HostBinding('attr.size')
  @Input()
  size: Sizes = Sizes.tiny;

  max = 4;

  items: AvatarComponent[] = [];

  @ContentChildren(AvatarComponent)
  avatars: QueryList<AvatarComponent>;

  @HostBinding('attr.capacity')
  get capacity() {
    return Math.min(this.avatars.length, this.max);
  }

  @HostBinding('attr.shape')
  @Input() shape: Shapes = Shapes.square;
}
