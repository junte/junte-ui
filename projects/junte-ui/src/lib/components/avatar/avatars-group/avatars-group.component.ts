import { Component, HostBinding, Input } from '@angular/core';
import { Avatar } from '../avatar-abstract';

@Component({
  selector: 'jnt-avatars-group',
  templateUrl: './encapsulated.html'
})
export class AvatarsGroupComponent extends Avatar {
  @HostBinding('attr.host') readonly host = 'jnt-avatars-group-host';

  @HostBinding('attr.name')
  @Input() name: string;

  extra = 4;

  @HostBinding('attr.children')
  get count() {
    return this.items.length > this.extra ? this.extra : this.items.length;
  }

}
