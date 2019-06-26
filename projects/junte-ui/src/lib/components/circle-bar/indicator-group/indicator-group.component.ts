import {Component, ContentChildren, HostBinding, Input, QueryList} from '@angular/core';
import {BarIndicatorComponent} from '../indicator/indicator.component';

@Component({
  selector: 'jnt-bar-indicator-group',
  templateUrl: './indicator-group.encapsulated.html'
})
export class BarIndicatorGroupComponent {

  @HostBinding('attr.host') readonly host = 'jnt-bar-indicator-group-host';

  @ContentChildren(BarIndicatorComponent)
  indicators: QueryList<BarIndicatorComponent>;

  @Input() @HostBinding('attr.index') index: number;
  @Input() @HostBinding('attr.groups') groups: number;

}
