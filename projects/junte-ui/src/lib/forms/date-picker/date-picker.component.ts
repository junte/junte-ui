import { Component, forwardRef, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { format as formatDate, parse, setHours, setMinutes } from 'date-fns';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';
import { PopoverService } from '../../overlays/popover/popover.service';
import { DatePickerFeatures } from './enums';

const INPUT_DELAY = 500;

export enum CLOCK_TYPE {
  HOURS = 1,
  MINUTES = 2
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
  datePickerFeatures = DatePickerFeatures;
  opened: boolean;
  timeMeridien = 'AM';
  VIEW_HOURS = CLOCK_TYPE.HOURS;
  VIEW_MINUTES = CLOCK_TYPE.MINUTES;
  currentView: CLOCK_TYPE = this.VIEW_HOURS;
  hours = 0;
  minutes = 0;

  inputControl = this.fb.control(null);
  calendarControl = this.fb.control(new Date());

  format = 'dd.MM.yyyy';

  form = this.fb.group({
    input: this.inputControl,
    calendar: this.calendarControl
  });

  @PropertyApi({
    description: 'Placeholder for date picker',
    type: 'string'
  })
  @Input() placeholder = '';

  @PropertyApi({
    description: 'Date picker features',
    path: 'ui.form.datePicker.features',
    options: [DatePickerFeatures.clock]
  })
  @HostBinding('attr.features')
  @Input() features: DatePickerFeatures[] = [];

  @ViewChild('calendarTemplate', {static: true}) calendarTemplate;

  constructor(private fb: FormBuilder,
              private popover: PopoverService) {
  }

  ngOnInit() {
    this.calendarControl.valueChanges.pipe(distinctUntilChanged())
      .subscribe(date => {
        this.inputControl.patchValue(!!date ? formatDate(date, this.format) : null);
        this.onChange(date);
        this.opened = false;
        this.popover.hide();
      });

    this.inputControl.valueChanges.pipe(debounceTime(INPUT_DELAY), distinctUntilChanged())
      .subscribe(date => {
        this.updateCalendar(parse(date, this.format, new Date()));
        this.popover.hide();
      });
  }

  updateCalendar(date: Date) {
    if (date instanceof Date && !isNaN(date.getTime())) {
      this.calendarControl.patchValue(date);
    } else {
      this.inputControl.patchValue(null);
    }
  }

  onChange(value: any) {
  }

  onTouched() {
  }

  writeHour(hour: any): void {
    this.hours = (this.timeMeridien === 'AM' ? hour : hour + 12);
    this.currentView = this.VIEW_MINUTES;
  }

  writeMinutes(minute: any): void {
    this.minutes = minute;
    this.currentView = this.VIEW_HOURS;
    this.calendarControl.patchValue(setMinutes(this.calendarControl.value, minute * 5));
    this.calendarControl.patchValue(setHours(this.calendarControl.value, this.hours));
  }

  writeValue(value: Date) {
    this.calendarControl.patchValue(value);
    this.updateCalendar(value);
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean) {
    disabled ? this.inputControl.disable() : this.inputControl.enable();
  }

  setCurrentView(type: CLOCK_TYPE) {
    this.currentView = type;
  }

  public setMeridien(m: 'PM' | 'AM') {
    this.timeMeridien = m;
    this.calendarControl.patchValue(setMinutes(this.calendarControl.value, this.minutes * 5));
    this.calendarControl.patchValue(setHours(this.calendarControl.value, this.timeMeridien === 'AM' ? this.hours : this.hours + 12));
  }

}
