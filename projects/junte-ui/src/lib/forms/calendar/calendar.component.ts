import {
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
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
  addYears,
  format,
  getYear,
  isEqual,
  setDate,
  setMonth,
  setYear,
  startOfMonth,
  startOfWeek,
  subMonths,
  subYears
} from 'date-fns';
import { NGXLogger } from 'ngx-logger';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter } from 'rxjs/operators';
import { JunteUIModuleConfig } from '../../config';
import { PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';
import { I18N_PROVIDERS } from '../../core/i18n/providers';
import { Period } from './enums';
import { today } from './utils';
import { WeekMetricComponent } from './week/week-metric.component';

const WEEKS_DISPLAYED = 5;
const DAYS_IN_WEEK = 7;
const DATE_ROWS = 3;
const DATE_COLS = 4;

enum ViewType {
  date = 'date',
  year = 'year',
  month = 'month'
}

@Component({
  selector: 'jnt-calendar',
  templateUrl: './calendar.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CalendarComponent),
      multi: true
    }, ...I18N_PROVIDERS
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
  months = [];
  years = [];
  viewType = ViewType;
  view: ViewType = ViewType.date;

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
  @HostBinding('attr.data-disabled')
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
  addYears = addYears;
  subYears = subYears;
  isEqual = isEqual;
  getYear = getYear;

  onChange: (date: Date) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(private logger: NGXLogger,
              public config: JunteUIModuleConfig) {
  }

  ngOnInit() {
    this.period = startOfMonth(this.current);

    combineLatest([this.year$, this.month$])
      .pipe(filter(([year, month]) =>
        year !== null && year !== undefined && month !== null && month !== undefined))
      .subscribe(([year, month]) =>
        this.period = setDate(setMonth(setYear(new Date(), year), month), 1));
  }

  writeValue(date: Date): void {
    if (!!date) {
      this.current = this.period = date;
    }
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  select(date: Date) {
    this.current = date;
    this.onChange(date);
  }

  private update() {
    const start = startOfWeek(this.period, {
      weekStartsOn: this.config.locale ? this.config.locale.dfns.options.weekStartsOn : 1
    });
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

    for (let i = 0; i < DATE_ROWS; i++) {
      this.months[i] = [];
      for (let j = 0; j < DATE_COLS; j++) {
        this.months[i].push(new Date(getYear(this.period), i * DATE_COLS + j, 1));
      }
    }

    for (let i = 0; i < DATE_ROWS; i++) {
      this.years[i] = [];
      for (let j = 0; j < DATE_COLS; j++) {
        this.years[i].push(new Date(getYear(this.period) - 4 + i * DATE_COLS + j, i * DATE_COLS + j, 1));
      }
    }
  }
}
