import { Component, HostBinding, Input } from '@angular/core';
import { UI } from '../../core/enums/ui';

export enum DatePeriodBases {
  days = 'day(s)'
}

@Component({
  selector: 'jnt-date-period',
  templateUrl: './date-period.encapsulated.html'
})
export class DatePeriodComponent {

  @HostBinding('attr.host') readonly host = 'jnt-date-period-host';
  ui = UI;

  @Input() base: DatePeriodBases = DatePeriodBases.days;
  @Input() start: Date;
  @Input() end: Date;
  @Input() current: Date = new Date();

}
