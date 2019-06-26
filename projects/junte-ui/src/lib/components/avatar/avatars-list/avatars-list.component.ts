import {Component, ContentChildren, HostBinding, Input, QueryList} from '@angular/core';
import {Sizes, UI} from '../../../enum/ui';
import {AvatarComponent} from '../avatar.component';

const MAX_CAPACITY = 5;

@Component({
  selector: 'jnt-avatars-list',
  templateUrl: './avatars-list.encapsulated.html'
})
export class AvatarsListComponent {

  @HostBinding('attr.host') readonly host = 'jnt-avatars-list-host';

  ui = UI;
  max = MAX_CAPACITY;

  @ContentChildren(AvatarComponent)
  avatars: QueryList<AvatarComponent>;

  @HostBinding('attr.capacity')
  get capacity() {
    return Math.min(this.avatars.length, MAX_CAPACITY);
  }

  @Input() @HostBinding('attr.size')
  size: Sizes = Sizes.tiny;

}
