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
  addDays, addMonths,
  addWeeks,
  addYears,
  getMonth,
  getYear,
  isSameMonth,
  startOfWeek,
  subMonths,
  subYears
} from 'date-fns';
import { NGXLogger } from 'ngx-logger';
import { LOGGER_PROVIDERS } from '../../core/logger/providers';
import { JunteUIConfig } from '../../config';
import { PropertyApi } from '../../core/decorators/api';
import { Feature } from '../../core/enums/feature';
import { UI } from '../../core/enums/ui';
import { I18N_PROVIDERS } from '../../core/i18n/providers';
import { Period } from './types';
import { today } from './utils';
import { WeekMetricDirective } from './week/week-metric.directive';

const WEEKS_DISPLAYED = 6;
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
    },
    ...I18N_PROVIDERS,
    ...LOGGER_PROVIDERS
  ]
})
export class CalendarComponent implements ControlValueAccessor, OnInit {

  @HostBinding('attr.host')
  readonly host = 'jnt-calendar-host';

  ui = UI;

  private _period: Date = today();

  current: Date;

  weeks = [];
  months = [];
  years = [];
  viewType = ViewType;
  view: ViewType = ViewType.date;

  @PropertyApi({
    description: 'Calendar features',
    path: 'ui.feature',
    options: [Feature.today]
  })
  @Input()
  features: Feature[] = [];

  @ContentChildren(WeekMetricDirective)
  metrics: QueryList<WeekMetricDirective>;

  @ContentChild('calendarDayTemplate')
  dayTemplate: TemplateRef<any>;

  @ContentChild('calendarMetricTemplate')
  metricTemplate: TemplateRef<any>;

  @Output()
  updated = new EventEmitter<Period>();

  @Output()
  selected = new EventEmitter<Date>();

  @PropertyApi({
    description: 'Set disabled state',
    type: 'boolean',
    default: 'false',
  })
  @HostBinding('attr.data-disabled')
  @Input()
  disabled = false;

  @PropertyApi({
    description: 'Set current month for displaying',
    type: 'Date'
  })
  @Input('month')
  set period(period: Date) {
    if (!isSameMonth(this._period, period)) {
      this._period = period;
      this.update();
    }
  }

  get period() {
    return this._period;
  }

  onChange: (date: Date) => void = () => this.logger.debug('value accessor is not registered');
  onTouched: () => void = () => this.logger.debug('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(private logger: NGXLogger,
              public config: JunteUIConfig) {
  }

  ngOnInit() {
    this.update();
  }

  writeValue(date: Date): void {
    this.current = date;
    this.period = date || today();
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  select(date: Date) {
    this.current = date;
    this.onChange(date);
    this.selected.emit(date);
  }

  today() {
    const now = new Date();
    this.period = now;
    this.select(now);
  }

  add() {
    if (this.view === ViewType.date) {
      this.period = addMonths(this.period, 1);
    } else if (this.view === ViewType.month) {
      this.period = addYears(this.period, 1);
    } else {
      this.period = addYears(this.period, 12);
    }
  }

  sub() {
    if (this.view === ViewType.date) {
      this.period = subMonths(this.period, 1);
    } else if (this.view === ViewType.month) {
      this.period = subYears(this.period, 1);
    } else {
      this.period = subYears(this.period, 12);
    }
  }

  private update() {
    const start = startOfWeek(new Date(getYear(this.period), getMonth(this.period), 1),
      {locale: this.config.locale.dfns});
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
