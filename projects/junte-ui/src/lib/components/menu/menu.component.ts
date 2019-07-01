import { Component, HostBinding } from '@angular/core';
import { Matching } from '../../enum/ui';
import { Menu } from './menu-abstract';
import { UI } from '../../enum/ui';

@Component({
  selector: 'jnt-menu',
  templateUrl: './menu.encapsulated.html'
})
export class MenuComponent extends Menu {

  ui = UI;
  @HostBinding('attr.host') readonly host = 'jnt-menu-host';

  matching = Matching;

}
