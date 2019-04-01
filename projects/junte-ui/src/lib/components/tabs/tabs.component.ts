import { AfterContentInit, Component, ContentChildren, HostBinding, QueryList } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'jnt-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {

  @HostBinding('attr.host') readonly host = 'jnt-tabs-host';

  items: TabComponent[] = [];

  @ContentChildren(TabComponent)
  tabItems: QueryList<TabComponent>;

  constructor() {
  }

  ngAfterContentInit() {
    this.items = this.tabItems.toArray();
    this.tabItems.changes.subscribe(items => this.items = items.toArray());
  }

}
