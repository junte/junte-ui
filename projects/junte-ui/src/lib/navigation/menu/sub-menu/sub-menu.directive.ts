import { ContentChildren, Directive, QueryList } from '@angular/core';
import { SubMenuItemDirective } from './sub-menu-item.directive';

@Directive({
  selector: 'jnt-sub-menu'
})
export class SubMenuDirective {

  @ContentChildren(SubMenuItemDirective)
  items: QueryList<SubMenuItemDirective>;
}
