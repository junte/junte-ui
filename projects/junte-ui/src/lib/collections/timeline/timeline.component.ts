import { Component, ContentChildren, HostBinding, QueryList } from '@angular/core';
import { UI } from '../../core/enums/ui';
import { TimelineItemComponent } from './item/timeline-item.component';

@Component({
  selector: 'jnt-timeline',
  templateUrl: './timeline.encapsulated.html',
})
export class TimelineComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-timeline-host';

  @ContentChildren(TimelineItemComponent)
  items: QueryList<TimelineItemComponent>;

}
