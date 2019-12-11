import { Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { Matching, UI } from '../../../../enum/ui';
import { BadgeComponent } from '../../../elements/badge/badge.component';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'jnt-submenu',
  template: '',
})
export class SubmenuComponent implements OnInit {

  ui = UI;

  @Input() icon: string;
  @Input() title: string;
  @Input() badge: number;
  @Input() matching: Matching = Matching.fullMatch;
  @Input() opened = false;
  @Output() click = new EventEmitter<any>();

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;

  @ContentChildren(MenuItemComponent)
  menuItems: QueryList<MenuItemComponent>;

  constructor() {
  }

  ngOnInit() {
  }

}