import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { Outline, UI } from '../../../enum/ui';
import { TabComponent } from './tab/tab.component';
import { PropertyApi } from '../../../decorators/api';

@Component({
  selector: 'jnt-tabs',
  templateUrl: './tabs.encapsulated.html'
})
export class TabsComponent {

  ui = UI;

  @HostBinding('attr.outline')
  _outline: Outline = Outline.fill;

  @HostBinding('attr.host') readonly host = 'jnt-tabs-host';

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  active = 0;

  @PropertyApi({
    description: 'there is/no background for the content',
    path: 'ui.outline',
    default: Outline.fill,
    options: [Outline.fill, Outline.transparent]
  })

  @Input() set outline(outline: Outline) {
    if (!!outline) {
      this._outline = outline;
    } else {
      this._outline = Outline.fill;
    }
  }

}
