import { Component, ContentChildren, HostBinding, QueryList } from '@angular/core';
import { UI } from '../../core/enums/ui';
import { TimelineItemDirective } from './item/timeline-item.directive';

@Component({
  selector: 'jnt-timeline',
  templateUrl: './timeline.encapsulated.html',
})
export class TimelineComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-timeline-host';

  @ContentChildren(TimelineItemDirective)
  items: QueryList<TimelineItemDirective>;

}
