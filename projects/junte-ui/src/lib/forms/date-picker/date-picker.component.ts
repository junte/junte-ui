import { Component, forwardRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { format as formatDate, parse } from 'date-fns';
import { NGXLogger } from 'ngx-logger';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { JunteUIModuleConfig } from '../../config';
import { PropertyApi } from '../../core/decorators/api';
import { Breakpoint } from '../../core/enums/breakpoint';
import { UI } from '../../core/enums/ui';
import { isEqual } from '../../core/utils/equal';
import { BreakpointService } from '../../layout/responsive/breakpoint.service';
import { PopoverInstance } from '../../overlays/popover/popover.service';
import { DatePickerType } from './enums';

const INPUT_DELAY = 500;
const DIGIT_MASK_CHAR = '_';
const HOURS_MAX = 23;
const MINUTES_MAX = 59;

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
  private _type: DatePickerType = DatePickerType.date;

  reference: { popover: PopoverInstance } = {popover: null};
  hours = 0;
  minutes = 0;

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
  @Input() placeholder = '';

  @PropertyApi({
    description: 'Date picker type',
    path: 'ui.type',
    options: [DatePickerType.date, DatePickerType.time, DatePickerType.dateTime]
  })
  @Input() set type(type: DatePickerType) {
    this.clear();
    this._type = type || DatePickerType.date;
  }

  get type() {
    return this._type;
  }

  onChange: (value: any) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(private logger: NGXLogger,
              private fb: FormBuilder,
              private breakpoint: BreakpointService,
              public config: JunteUIModuleConfig) {
  }

  ngOnInit() {
    this.calendarControl.valueChanges.pipe(distinctUntilChanged())
      .subscribe(date => {
        this.dateControl.setValue(!!date ? formatDate(date, this.config.formats.date).replace(/\D/gi, '') : null);
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
    if (!!value) {
      if (this.type !== DatePickerType.dateTime) {
        let output = this.type === DatePickerType.date
          ? this.config.masks.date : this.config.masks.time;
        for (let char of value) {
          output = output.replace(DIGIT_MASK_CHAR, char);
        }
        let parsed = parse(output, this.type === DatePickerType.date
          ? this.config.formats.date : this.config.formats.time, new Date(0));
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
      } else if (!!this.dateControl.value && this.timeControl.value) {
        let output = this.config.masks.datetime;
        for (let char of this.dateControl.value) {
          output = output.replace(DIGIT_MASK_CHAR, char);
        }
        for (let char of this.timeControl.value) {
          output = output.replace(DIGIT_MASK_CHAR, char);
        }
        let parsed = parse(output, this.config.formats.datetime, new Date());
        if (parsed instanceof Date && !isNaN(parsed.getTime())) {
          this.onChange(parsed);
          if (close) {
            this.close();
          }
        }
      }
    } else {
      this.onChange(null);
      if (close) {
        this.calendarControl.setValue(null);
        this.close();
      } else {
        this.hoursControl.setValue(null, {emitEvent: false});
        this.minutesControl.setValue(null, {emitEvent: false});
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
      this.dateControl.setValue(formatDate(date, this.config.formats.date), {emitEvent: false});
    } else {
      this.clear();
    }
  }

  setDisabledState(disabled: boolean) {
    disabled ? this.dateControl.disable({emitEvent: false}) : this.dateControl.enable({emitEvent: false});
  }
}
