import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { UI } from '../../../../enum/ui';
import { BadgeComponent } from '../../../elements/badge/badge.component';

@Component({
  selector: 'jnt-tab',
  templateUrl: './tab.encapsulated.html'
})
export class TabComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-tab-host';
  @Input() title: string;
  @Input() active: boolean;
  @Input() icon: string;

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;

}
