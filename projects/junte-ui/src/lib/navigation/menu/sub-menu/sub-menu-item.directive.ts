import { Directive } from '@angular/core';
import { AbstractMenuItem } from '../abstract-menu-item';

@Directive({
  selector: 'jnt-sub-menu-item'
})
export class SubMenuItemDirective extends AbstractMenuItem {
}
