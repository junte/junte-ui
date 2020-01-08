import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { Outline, UI } from '../../../enum/ui';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'jnt-tabs',
  templateUrl: './tabs.encapsulated.html'
})
export class TabsComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-tabs-host';

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  @Input()
  active = 0;

  @HostBinding('attr.outline')
  @Input()
  outline: Outline = Outline.fill;

}
