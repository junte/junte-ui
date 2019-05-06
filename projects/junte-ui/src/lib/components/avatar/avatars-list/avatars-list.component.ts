import { Component, HostBinding, Input } from '@angular/core';
import { Avatar } from '../avatar-abstract';
import { Sizes, UI } from '../../../enum/ui';

@Component({
  selector: 'jnt-avatars-list',
  templateUrl: './avatars-list.component.html',
  styleUrls: ['./avatars-list.component.scss']
})
export class AvatarsListComponent extends Avatar {

  @HostBinding('attr.host') readonly host = 'jnt-avatars-list-host';

  ui = UI;

  @HostBinding('attr.size')
  @Input()
  size: Sizes = Sizes.tiny;

}
