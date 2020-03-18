import {
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  OnInit,
  Output,
  QueryList,
  TemplateRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  addDays,
  addMonths,
  addWeeks,
  format,
  getYear,
  isEqual,
  setDate,
  setMonth,
  setYear,
  startOfMonth,
  startOfWeek,
  subMonths
} from 'date-fns';
import { JunteUIModuleConfig } from '../../config';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter } from 'rxjs/operators';
import { PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';
import { Period } from './enums';
import { today } from './utils';
import { WeekMetricComponent } from './week/week-metric.component';

const WEEKS_DISPLAYED = 5;
const DAYS_IN_WEEK = 7;

@Component({
  selector: 'jnt-calendar',
  templateUrl: './calendar.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CalendarComponent),
      multi: true
    }
  ]
})
export class CalendarComponent implements ControlValueAccessor, OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-calendar-host';

  ui = UI;

  private year$ = new BehaviorSubject<number>(getYear(new Date()));
  private month$ = new BehaviorSubject<number>(0);
  private _period: Date;

  current: Date = today();
  weeks = [];

  @ContentChildren(WeekMetricComponent)
  metrics: QueryList<WeekMetricComponent>;

  @ContentChild('calendarDayTemplate')
  calendarDayTemplate: TemplateRef<any>;

  @ContentChild('calendarMetricTemplate')
  calendarMetricTemplate: TemplateRef<any>;

  @Output()
  updated = new EventEmitter<Period>();

  @PropertyApi({
    description: 'Set disabled state',
    type: 'boolean',
    default: 'false',
  })
  @HostBinding('attr.disabled')
  @Input()
  disabled = false;

  @PropertyApi({
    description: 'Set current year',
    type: 'number'
  })
  @Input()
  set year(year: number) {
    this.year$.next(year);
  }

  @PropertyApi({
    description: 'Set current month',
    type: 'number'
  })
  @Input()
  set month(month: number) {
    this.month$.next(month);
  }

  set period(period: Date) {
    this._period = period;
    this.update();
  }

  get period() {
    return this._period;
  }

  format = format;
  addMonths = addMonths;
  subMonths = subMonths;
  isEqual = isEqual;

  onChange: (date: Date) => void;

  constructor(public config: JunteUIModuleConfig) {
  }

  ngOnInit() {
    this.period = startOfMonth(this.current);

    combineLatest(this.year$, this.month$)
      .pipe(filter(([year, month]) => !!year && !!month))
      .subscribe(([year, month]) =>
        this.period = setDate(setMonth(setYear(new Date(), year), month), 1));
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

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  private update() {
    const start = startOfWeek(this.period, {weekStartsOn: this.config.locale.dfns.options.weekStartsOn});
    let date = start;
    this.weeks = [];
    for (let i = 0; i < WEEKS_DISPLAYED; i++) {
      this.weeks[i] = {days: [], date: date};
      for (let j = 0; j < DAYS_IN_WEEK; j++) {
        this.weeks[i].days[j] = addDays(date, j);
      }
      date = addWeeks(date, 1);
    }
    this.updated.emit({start: start, end: date});
  }

}
