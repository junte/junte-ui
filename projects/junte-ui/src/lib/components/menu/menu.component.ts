import { Component, HostBinding } from '@angular/core';
import { Menu } from './menu-abstract';

@Component({
  selector: 'jnt-menu',
  templateUrl: './encapsulated.html'
})
export class MenuComponent extends Menu {

  @HostBinding('attr.host') readonly host = 'jnt-menu-host';

}
