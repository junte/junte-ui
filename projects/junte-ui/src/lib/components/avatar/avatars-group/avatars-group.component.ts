import {Component, ContentChildren, HostBinding, Input, QueryList} from '@angular/core';
import {AvatarComponent} from '../avatar.component';
import {Shapes, Sizes, UI} from '../../../enum/ui';

const MAX_CAPACITY = 4;

@Component({
  selector: 'jnt-avatars-group',
  templateUrl: './avatars-group.encapsulated.html'
})
export class AvatarsGroupComponent {

  @HostBinding('attr.host') readonly host = 'jnt-avatars-group-host';

  ui = UI;
  max = MAX_CAPACITY;

  @HostBinding('attr.size')
  @Input()
  size: Sizes = Sizes.tiny;

  @ContentChildren(AvatarComponent)
  avatars: QueryList<AvatarComponent>;

  @HostBinding('attr.capacity')
  get capacity() {
    return Math.min(this.avatars.length, MAX_CAPACITY);
  }

  @HostBinding('attr.shape')
  @Input() shape: Shapes = Shapes.square;
}
