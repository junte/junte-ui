import { Component, ContentChildren, HostBinding, Input, OnInit, QueryList } from '@angular/core';
import { Shapes, Sizes, UI } from '../../../enum/ui';
import { AvatarComponent } from '../avatar.component';

@Component({
  selector: 'jnt-avatars-list',
  templateUrl: './encapsulated.html'
})
export class AvatarsListComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-avatars-list-host';

  maxAvatars = 5;

  items: AvatarComponent[] = [];

  @ContentChildren(AvatarComponent)
  avatars: QueryList<AvatarComponent>;

  @HostBinding('attr.children')
  get children() {
    return this.avatars.length > this.maxAvatars ? this.maxAvatars : this.avatars.length;
  }

  @HostBinding('attr.shape')
  @Input() shape: Shapes = Shapes.circle;

  @Input() @HostBinding('attr.size')
  size: Sizes = Sizes.tiny;

}
