import { Component, HostBinding, Input } from '@angular/core';
import { Avatar } from '../avatar-abstract';
import { Sizes, UI } from '../../../enum/ui';

@Component({
  selector: 'jnt-avatars-list',
  templateUrl: './encapsulated.html'
})
export class AvatarsListComponent extends Avatar {

  @HostBinding('attr.host') readonly host = 'jnt-avatars-list-host';

  @HostBinding('attr.children')
  get count() {
    return this.items.length;
  }

  ui = UI;

  @HostBinding('attr.size')
  @Input()
  size: Sizes = Sizes.tiny;

}
