import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Menu } from '../../menu/menu-abstract';
import { Avatar } from '../avatar-abstract';
import { Sizes, UI } from '../../../enum/ui';

@Component({
  selector: 'jnt-avatars-group',
  templateUrl: './encapsulated.html'
})
export class AvatarsGroupComponent extends Avatar {
  @HostBinding('attr.host') readonly host = 'jnt-avatars-group-host';

  @HostBinding('attr.name')
  @Input() name: string;

  extra = 4;

}
