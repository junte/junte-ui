import { Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { Icons, Positions, Schemes, UI } from '../../../enum/ui';
import { BadgeComponent } from '../../badge/badge.component';

@Component({
  selector: 'jnt-menu-item',
  template: ''
})
export class MenuItemComponent {

  ui = UI;

  @Input() icon: Icons;
  @Input() title: string;
  @Input() link: string;
  @Output() click = new EventEmitter<any>();
  @Input('exact-link') exactLink = true;
  @Input() scheme: Schemes = Schemes.primary;
  @Input() position: Positions = Positions.rightTop;


  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;

}
