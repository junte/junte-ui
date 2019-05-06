import { Component, HostBinding, OnInit } from '@angular/core';
import { Menu } from '../../menu/menu-abstract';
import { Avatar } from '../avatar-abstract';

@Component({
  selector: 'jnt-avatars-group',
  templateUrl: './avatars-group.component.html',
  styleUrls: ['./avatars-group.component.scss']
})
export class AvatarsGroupComponent extends Avatar {
  @HostBinding('attr.host') readonly host = 'jnt-avatars-group-host';
}
