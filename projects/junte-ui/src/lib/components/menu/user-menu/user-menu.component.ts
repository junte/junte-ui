import { Component, HostBinding } from '@angular/core';
import { Menu } from '../menu-abstract';

@Component({
  selector: 'jnt-user-menu',
  templateUrl: './encapsulated.html',
  styleUrls: ['./encapsulated.scss']
})
export class UserMenuComponent extends Menu {

  @HostBinding('attr.host') readonly host = 'jnt-user-menu-host';
}
