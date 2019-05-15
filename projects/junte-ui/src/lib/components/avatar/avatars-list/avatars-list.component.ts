import {Component, ContentChildren, HostBinding, Input, QueryList} from '@angular/core';
import {Sizes, UI} from '../../../enum/ui';
import {AvatarComponent} from '../avatar.component';

const MAX_AVATARS = 5;

@Component({
  selector: 'jnt-avatars-list',
  templateUrl: './encapsulated.html'
})
export class AvatarsListComponent {

  @HostBinding('attr.host') readonly host = 'jnt-avatars-list-host';

  ui = UI;

  @ContentChildren(AvatarComponent)
  avatars: QueryList<AvatarComponent>;

  @HostBinding('attr.children')
  get children() {
    return Math.min(this.avatars.length, MAX_AVATARS);
  }

  @Input() @HostBinding('attr.size')
  size: Sizes = Sizes.tiny;

}
