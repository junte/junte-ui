import { Component, ContentChildren, QueryList } from '@angular/core';
import { SubMenuItemComponent } from './sub-menu-item.component';

@Component({
  selector: 'jnt-sub-menu',
  template: ''
})
export class SubMenuComponent {

  @ContentChildren(SubMenuItemComponent)
  items: QueryList<SubMenuItemComponent>;
  
}
