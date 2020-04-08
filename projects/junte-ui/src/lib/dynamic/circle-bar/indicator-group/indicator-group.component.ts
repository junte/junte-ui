import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { BarIndicatorComponent } from '../indicator/indicator.component';

@Component({
  selector: 'jnt-bar-indicator-group',
  templateUrl: './indicator-group.encapsulated.html'
})
export class BarIndicatorGroupComponent {

  @HostBinding('attr.host') readonly host = 'jnt-bar-indicator-group-host';

  @ContentChildren(BarIndicatorComponent)
  indicators: QueryList<BarIndicatorComponent>;

  @HostBinding('attr.data-index')
  @Input()
  index: number;

  @HostBinding('attr.data-groups')
  @Input() groups: number;

}
