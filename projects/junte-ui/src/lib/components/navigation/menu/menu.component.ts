import { Component, HostBinding } from '@angular/core';
import { Matching, UI } from '../../../enum/ui';
import { Menu } from './menu-abstract';

@Component({
  selector: 'jnt-menu',
  templateUrl: './menu.encapsulated.html'
})
export class MenuComponent extends Menu {

  ui = UI;
  @HostBinding('attr.host') readonly host = 'jnt-menu-host';

  matching = Matching;

}
