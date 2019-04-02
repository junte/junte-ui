import { Component, HostBinding } from '@angular/core';
import { Menu } from './menu-abstract';

@Component({
  selector: 'jnt-menu',
  templateUrl: './encapsulated.html',
  styleUrls: ['./encapsulated.scss']
})
export class MenuComponent extends Menu {

  @HostBinding('attr.host') readonly host = 'jnt-menu-host';

}
