import { Component, ContentChild, forwardRef, Input, OnInit, TemplateRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { addDays, format, getDate, isEqual, startOfWeek } from 'date-fns';
import { today } from '../utils';

const DAYS_IN_WEEK = 7;

@Component({
  selector: 'jnt-calendar-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WeekComponent),
      multi: true
    }
  ]
})
export class WeekComponent implements ControlValueAccessor, OnInit {

  private _period;

  current: string = today();
  days: string[] = [];

  @ContentChild('dayTemplate')
  dayTemplate: TemplateRef<any>;

  @Input()
  set period(period: Date) {
    this._period = format(period);
    this.update();
  }

  get period() {
    return this._period;
  }

  ngOnInit() {
    this.period = startOfWeek(this.current, {weekStartsOn: 1});
  }

  onChange = (date: string) => {
    if (!isEqual(date, this.current)) {
      this.current = date;
    }
  };

  writeValue(date: string): void {
    this.current = date;
  }

  registerOnChange(callback: (date: string) => void): void {
  }

  registerOnTouched(fn: () => void): void {
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
