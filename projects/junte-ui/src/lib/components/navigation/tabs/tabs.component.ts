import { Component, ContentChildren, HostBinding, QueryList } from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { UI } from '../../../enum/ui';

@Component({
  selector: 'jnt-tabs',
  templateUrl: './tabs.encapsulated.html'
})
export class TabsComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-tabs-host';

  tabs: TabComponent[] = [];

  @ContentChildren(TabComponent)
  tabItems: QueryList<TabComponent>;

  constructor() {
  }

  activatedTab(tab: TabComponent) {
    this.tabItems.forEach(t => t.active = false);
    tab.active = true;
  }

}
