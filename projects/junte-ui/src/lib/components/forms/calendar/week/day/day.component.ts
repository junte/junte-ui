import { Component, HostBinding, Input, TemplateRef } from '@angular/core';
import { format, isEqual } from 'date-fns';

@Component({
  selector: 'jnt-calendar-day',
  templateUrl: './day.encapsulated.html'
})
export class DayComponent {

  @HostBinding('attr.host') readonly host = 'jnt-calendar-day-host';

  @Input() date: Date;
  @Input() current: Date;
  @Input() dayTemplate: TemplateRef<any>;

  @HostBinding('attr.current-day')
  get day() {
    return isEqual(format(this.date, 'YYYY-MM-DD'), format(this.current, 'YYYY-MM-DD'));
  }
}
