import { Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import {AnimatedIcons, FontIcons, Matching, Schemes, SvgIcons, UI} from '../../../enum/ui';
import { BadgeComponent } from '../../badge/badge.component';

const DEFAULT_TARGET = '_self';

@Component({
  selector: 'jnt-menu-item',
  template: ''
})
export class MenuItemComponent {

  ui = UI;

  @Input() icon: string;
  @Input() title: string;
  @Input() link: string | string[];
  @Input() target: string = DEFAULT_TARGET;
  @Input() badge: number;
  @Input() matching: Matching = Matching.fullMatch;
  @Input() scheme: Schemes = Schemes.primary;
  @Output() click = new EventEmitter<any>();

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;

}
