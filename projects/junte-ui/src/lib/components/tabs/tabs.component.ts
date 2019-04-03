import {AfterContentInit, Component, ContentChildren, HostBinding, QueryList} from '@angular/core';
import {TabComponent} from './tab/tab.component';

@Component({
  selector: 'jnt-tabs',
  templateUrl: './encapsulated.html',
  styleUrls: ['./encapsulated.scss']
})
export class TabsComponent implements AfterContentInit {

  @HostBinding('attr.host') readonly host = 'jnt-tabs-host';

  tabs: TabComponent[] = [];

  @ContentChildren(TabComponent)
  tabItems: QueryList<TabComponent>;

  constructor() {
  }

  ngAfterContentInit() {
    this.tabs = this.tabItems.toArray();
    this.tabItems.changes.subscribe(items => this.tabs = items.toArray());
  }

  activatedTab(tab: TabComponent) {
    this.tabs.forEach(t => t.active = false);
    tab.active = true;
  }

}
