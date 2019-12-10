import { Component, HostBinding } from '@angular/core';
import { Menu } from '../menu-abstract';

@Component({
  selector: 'jnt-user-menu',
  templateUrl: './user-menu.encapsulated.html'
})
export class UserMenuComponent extends Menu {

  @HostBinding('attr.host') readonly host = 'jnt-user-menu-host';
}
