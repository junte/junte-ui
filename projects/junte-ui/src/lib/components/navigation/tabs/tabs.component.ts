import { Component, ContentChildren, HostBinding, QueryList } from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { UI } from '../../../enum/ui';
import { BadgeComponent } from '../../elements/badge/badge.component';

@Component({
  selector: 'jnt-tabs',
  templateUrl: './tabs.encapsulated.html'
})
export class TabsComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-tabs-host';

  @ContentChildren(TabComponent)
  tabItems: QueryList<TabComponent>;

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;

  activatedTab(tab: TabComponent) {
    this.tabItems.forEach(t => t.active = false);
    tab.active = true;
  }

}
