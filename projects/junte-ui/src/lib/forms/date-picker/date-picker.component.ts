import { Component, forwardRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { format as formatDate, parse } from 'date-fns';
import { NGXLogger } from 'ngx-logger';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Feature } from '../../core/enums/feature';
import { JunteUIConfig } from '../../config';
import { PropertyApi } from '../../core/decorators/api';
import { Breakpoint } from '../../core/enums/breakpoint';
import { UI } from '../../core/enums/ui';
import { Width } from '../../core/enums/width';
import { isEqual } from '../../core/utils/equal';
import { BreakpointService } from '../../layout/responsive/breakpoint.service';
import { PopoverInstance } from '../../overlays/popover/popover.service';
import { DatePickerType } from './enums';

const INPUT_DELAY = 500;
const DIGIT_MASK_CHAR = '_';
const HOURS_MAX = 23;
const MINUTES_MAX = 59;

enum Meridian {
  am = ' AM',
  pm = ' PM'
}

@Component({
  selector: 'jnt-date-picker',
  templateUrl: './date-picker.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ]
})
export class DatePickerComponent implements OnInit, ControlValueAccessor {

  @HostBinding('attr.host') readonly host = 'jnt-date-picker-host';

  ui = UI;
  datePickerType = DatePickerType;
  meridians = Meridian;
  feature = Feature;
  private _type: DatePickerType = DatePickerType.date;

  reference: { popover: PopoverInstance } = {popover: null};
  meridian: Meridian;

  @HostBinding('attr.data-width')
  _width: Width = Width.default;

  dateControl = this.fb.control(null);
  timeControl = this.fb.control(null);
  hoursControl = this.fb.control(null);
  minutesControl = this.fb.control(null);
  calendarControl = this.fb.control(new Date());
  form = this.fb.group({
    date: this.dateControl,
    time: this.timeControl,
    hours: this.hoursControl,
    minutes: this.minutesControl,
    calendar: this.calendarControl
  });

  get mobile() {
    return this.breakpoint.current === Breakpoint.mobile;
  }

  @HostBinding('attr.calendar-opened')
  calendarOpened = false;

  @HostBinding('attr.time-opened')
  timeOpened = false;

  @PropertyApi({
    description: 'Placeholder for date picker',
    type: 'string'
  })
  @Input()
  placeholder = '';

  @PropertyApi({
    description: 'Button for reset input',
    path: 'ui.feature',
    options: [Feature.allowEmpty],
  })
  @HostBinding('attr.data-features')
  @Input()
  features: Feature[] = [];

  @PropertyApi({
    description: 'Date picker type',
    path: 'ui.type',
    options: [DatePickerType.date, DatePickerType.time, DatePickerType.dateTime]
  })
  @Input()
  set type(type: DatePickerType) {
    this.clear();
    this._type = type || DatePickerType.date;
  }

  get type() {
    return this._type;
  }

  @PropertyApi({
    description: 'Input width',
    path: 'ui.width',
    default: Width.default,
    options: [Width.default, Width.fluid]
  })
  @Input() set width(width: Width) {
    this._width = width || Width.default;
  }

  onChange: (value: any) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(private logger: NGXLogger,
              private fb: FormBuilder,
              private breakpoint: BreakpointService,
              public config: JunteUIConfig) {
  }

  ngOnInit() {
    this.calendarControl.valueChanges.pipe(distinctUntilChanged())
      .subscribe(date => {
        this.dateControl.setValue(!!date ? formatDate(date, 'P',
          {locale: this.config.locale.dfns}).replace(/\D/gi, '') : null);
        this.calendarOpened = false;
        if (!!this.reference.popover) {
          this.reference.popover.hide();
          this.reference.popover = null;
        }
      });

    this.hoursControl.valueChanges
      .pipe(distinctUntilChanged((val1, val2) => isEqual(val1, val2)))
      .subscribe(() => this.setTime());

    this.minutesControl.valueChanges
      .pipe(distinctUntilChanged((val1, val2) => isEqual(val1, val2)))
      .subscribe(() => this.setTime());

    this.dateControl.valueChanges.pipe(debounceTime(INPUT_DELAY), distinctUntilChanged())
      .subscribe(date => this.update(date, true));

    this.timeControl.valueChanges.pipe(debounceTime(INPUT_DELAY), distinctUntilChanged())
      .subscribe(time => this.update(time));
  }

  close() {
    if (!!this.reference.popover) {
      this.reference.popover.hide();
      this.reference.popover = null;
    }
  }

  clear() {
    this.dateControl.setValue(null, {emitEvent: false});
    this.timeControl.setValue(null, {emitEvent: false});
    this.hoursControl.setValue(null, {emitEvent: false});
    this.minutesControl.setValue(null, {emitEvent: false});
  }

  update(value: string, close = false) {
    if (!!value || this.type === DatePickerType.dateTime) {
      if (this.type !== DatePickerType.dateTime) {
        let output = this.type === DatePickerType.date
          ? this.config.locale.ui.masks.date
          : this.config.locale.ui.masks.time + (this.meridian || '');
        for (const char of value) {
          output = output.replace(DIGIT_MASK_CHAR, char);
        }
        const parsed = parse(output, this.type === DatePickerType.date
          ? 'P' : 'p', new Date(0),
          {locale: this.config.locale.dfns});
        if (parsed instanceof Date && !isNaN(parsed.getTime())) {
          if (this.type === DatePickerType.date) {
            this.calendarControl.setValue(parsed);
          } else {
            this.hoursControl.setValue(parsed.getHours());
            this.minutesControl.setValue(parsed.getMinutes());
          }
          this.onChange(parsed);
          if (close) {
            this.close();
          }
        }
      } else if (!!this.dateControl.value && !!this.timeControl.value) {
        let output = this.config.locale.ui.masks.datetime + (this.meridian || '');
        for (const char of this.dateControl.value) {
          output = output.replace(DIGIT_MASK_CHAR, char);
        }
        for (const char of this.timeControl.value) {
          output = output.replace(DIGIT_MASK_CHAR, char);
        }
        const parsed = parse(output, 'Pp', new Date(),
          {locale: this.config.locale.dfns});
        if (parsed instanceof Date && !isNaN(parsed.getTime())) {
          this.onChange(parsed);
          if (close) {
            this.close();
          }
        }
      }
    } else {
      this.onChange(null);
      if (!this.dateControl.value) {
        this.calendarControl.setValue(null, {emitEvent: false});
        this.close();
      } else {
        this.hoursControl.setValue(null, {emitEvent: false});
        this.minutesControl.setValue(null, {emitEvent: false});
        this.close();
      }
    }
  }

  setTime() {
    let hours = '00';
    let minutes = '00';

    if (this.hoursControl.value !== null) {
      hours = Math.min(Math.max(+this.hoursControl.value, 0), HOURS_MAX).toString();
      this.hoursControl.setValue(+hours, {emitEvent: false});
      hours = hours.length === 1 ? `0${hours}` : hours;
    } else {
      this.hoursControl.setValue(0, {emitEvent: false});
    }

    if (this.minutesControl.value !== null) {
      minutes = Math.min(Math.max(+this.minutesControl.value, 0), MINUTES_MAX).toString();
      this.minutesControl.setValue(+minutes, {emitEvent: false});
      minutes = minutes.length === 1 ? `0${minutes}` : minutes;
    } else {
      this.minutesControl.setValue(0, {emitEvent: false});
    }

    this.timeControl.setValue(`${hours}${minutes}`);
  }

  writeValue(date: Date) {
    if (date instanceof Date && !isNaN(date.getTime())) {
      this.calendarControl.setValue(date, {emitEvent: false});
      this.dateControl.setValue(formatDate(date, 'P',
        {locale: this.config.locale.dfns}), {emitEvent: false});
    } else {
      this.clear();
    }
  }

  setDisabledState(disabled: boolean) {
    disabled ? this.dateControl.disable({emitEvent: false})
      : this.dateControl.enable({emitEvent: false});
  }
}
