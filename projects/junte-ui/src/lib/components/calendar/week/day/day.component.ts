import { Component, HostBinding, Input, TemplateRef } from '@angular/core';
import { format, isEqual } from 'date-fns';

@Component({
  selector: 'jnt-calendar-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent {

  @Input() date: Date;
  @Input() current: Date;
  @Input() dayTemplate: TemplateRef<any>;

  @HostBinding('attr.current-day')
  get day() {
    return isEqual(format(this.date, 'YYYY-MM-DD'), format(this.current, 'YYYY-MM-DD'));
  }

}
