import { Component, ContentChild, forwardRef, HostBinding, Input, OnInit, TemplateRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { addDays, format, isEqual, startOfWeek } from 'date-fns';
import { UI } from '../../../enum/ui';
import { today } from '../utils';

const DAYS_IN_WEEK = 7;

@Component({
  selector: 'jnt-calendar-week',
  templateUrl: './week.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WeekComponent),
      multi: true
    }
  ]
})
export class WeekComponent implements ControlValueAccessor, OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-calendar-week-host';

  ui = UI;

  private _period: Date;

  current: Date = today();
  days: string[] = [];

  @ContentChild('dayTemplate')
  dayTemplate: TemplateRef<any>;

  @Input()
  set period(period: Date) {
    this._period = period;
    this.update();
  }

  get period() {
    return this._period;
  }

  onChange: (date: Date) => void;

  ngOnInit() {
    this.period = startOfWeek(this.current, {weekStartsOn: 1});
  }

  writeValue(date: Date): void {
    this.current = date;
  }

  registerOnChange(callback: (date: Date) => void): void {
    this.onChange = (date: Date) => {
      if (!isEqual(date, this.current)) {
        this.current = date;
        callback(date);
      }
    };
  }

  registerOnTouched(fn): void {
  }

  private update() {
    let date = format(startOfWeek(this.period, {weekStartsOn: 1}));
    this.days = [];
    for (let j = 0; j < DAYS_IN_WEEK; j++) {
      this.days[j] = format(date);
      date = format(addDays(date, 1));
    }
  }

}
