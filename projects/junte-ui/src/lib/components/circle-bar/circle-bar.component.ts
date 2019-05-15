import {Component, ContentChildren, HostBinding, QueryList} from '@angular/core';
import {UI} from '../../enum/ui';
import {BarIndicatorGroupComponent} from './indicator-group/indicator-group.component';

@Component({
  selector: 'jnt-circle-bar',
  templateUrl: './encapsulated.html'
})
export class CircleBarComponent {

  ui = UI;

  @ContentChildren(BarIndicatorGroupComponent)
  groups: QueryList<BarIndicatorGroupComponent>;

  @HostBinding('attr.host') readonly host = 'jnt-circle-bar-host';
}
