import { Component, HostBinding } from '@angular/core';
import { UI } from '../../../enums/ui';
import { UrlMatching } from '../../../enums/url';
import { Menu } from './menu-abstract';

@Component({
  selector: 'jnt-menu',
  templateUrl: './menu.encapsulated.html'
})
export class MenuComponent extends Menu {

  ui = UI;

  matching = UrlMatching;

  @HostBinding('attr.host') readonly host = 'jnt-menu-host';
}
