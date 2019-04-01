import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'jnt-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {

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
