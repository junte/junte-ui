import { Component, forwardRef, HostBinding, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { format as formatDate, parse, setHours, setMinutes } from 'date-fns';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';
import { PopoverService } from '../../overlays/popover/popover.service';
import { DatePickerFeatures } from './enums';

const INPUT_DELAY = 500;

export enum CLOCK_TYPE {
  hours = 1,
  minutes = 2
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
  timeMeridian = 'AM';
  clockType = CLOCK_TYPE;
  currentView: CLOCK_TYPE = CLOCK_TYPE.hours;
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

  onChange: (value: any) => {};
  onTouched: () => {};
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

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
        const parsed = parse(date, this.format, new Date());
        if (parsed instanceof Date && !isNaN(parsed.getTime())) {
          this.calendarControl.patchValue(parsed);
        }
        this.popover.hide();
      });
  }

  writeHour(hour: any): void {
    this.hours = (this.timeMeridian === 'AM' ? hour : hour + 12);
    this.currentView = CLOCK_TYPE.minutes;
  }

  writeMinutes(minute: any): void {
    this.minutes = minute;
    this.currentView = CLOCK_TYPE.hours;
    this.calendarControl.patchValue(setMinutes(this.calendarControl.value, minute * 5));
    this.calendarControl.patchValue(setHours(this.calendarControl.value, this.hours));
  }

  writeValue(date: Date) {
    if (date instanceof Date && !isNaN(date.getTime())) {
      this.calendarControl.patchValue(date, {emitEvent: false});
      this.inputControl.patchValue(formatDate(date, this.format), {emitEvent: false});
    } else {
      this.inputControl.patchValue(null, {emitEvent: false});
    }
  }

  setDisabledState(disabled: boolean) {
    disabled ? this.inputControl.disable() : this.inputControl.enable();
  }

  setCurrentView(type: CLOCK_TYPE) {
    this.currentView = type;
  }

  public setMeridian(m: 'PM' | 'AM') {
    this.timeMeridian = m;
    this.calendarControl.patchValue(setMinutes(this.calendarControl.value, this.minutes * 5));
    this.calendarControl.patchValue(setHours(this.calendarControl.value,
      this.timeMeridian === 'AM' ? this.hours : this.hours + 12));
  }
}
