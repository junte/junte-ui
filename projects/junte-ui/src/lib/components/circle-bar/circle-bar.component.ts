import { Component, ContentChild, ContentChildren, HostBinding, QueryList, TemplateRef } from '@angular/core';
import { UI } from '../../enum/ui';
import { BarIndicatorGroupComponent } from './indicator-group/indicator-group.component';

@Component({
  selector: 'jnt-circle-bar',
  templateUrl: './circle-bar.encapsulated.html'
})
export class CircleBarComponent {

  ui = UI;

  @ContentChildren(BarIndicatorGroupComponent)
  groups: QueryList<BarIndicatorGroupComponent>;

  @ContentChild(TemplateRef)
  content: TemplateRef<any>;

  @HostBinding('attr.host') readonly host = 'jnt-circle-bar-host';
}
