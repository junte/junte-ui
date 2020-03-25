import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
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

  @PropertyApi({
    description: 'Start date of period',
    type: 'Date',
    default: 'new Date()'
  })
  @Input() start: Date;

  @PropertyApi({
    description: 'End date of period',
    type: 'Date',
    default: 'new Date()'
  })
  @Input() end: Date;

  @PropertyApi({
    description: 'Current date',
    type: 'Date',
    default: 'new Date()'
  })
  @Input() current: Date = new Date();

}
