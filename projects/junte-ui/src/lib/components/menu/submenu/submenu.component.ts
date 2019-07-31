import { Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { Icons, Matching, UI } from '../../../enum/ui';
import { BadgeComponent } from '../../badge/badge.component';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'jnt-submenu',
  template: '',
})
export class SubmenuComponent implements OnInit {

  ui = UI;

  @Input() icon: Icons;
  @Input() title: string;
  @Input() badge: number;
  @Input() matching: Matching = Matching.fullMatch;
  @Input() opened = false;
  @Output() click = new EventEmitter<any>();

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;

  @ContentChildren(MenuItemComponent)
  menuItems: QueryList<MenuItemComponent>;

  constructor() { }

  ngOnInit() {
  }

}
