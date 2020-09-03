import { Component, forwardRef, HostBinding, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { format as formatDate, parse, setHours, setMinutes } from 'date-fns';
import { NGXLogger } from 'ngx-logger';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Feature } from '../../core/enums/feature';
import { PropertyApi } from '../../core/decorators/api';
import { Breakpoint } from '../../core/enums/breakpoint';
import { UI } from '../../core/enums/ui';
import { BreakpointService } from '../../layout/responsive/breakpoint.service';
import { PopoverInstance } from '../../overlays/popover/popover.service';

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
  timeMeridian = 'AM';
  clockType = CLOCK_TYPE;
  currentView: CLOCK_TYPE = CLOCK_TYPE.hours;

  reference: { popover: PopoverInstance } = {popover: null};
  hours = 0;
  minutes = 0;

  inputControl = this.fb.control(null);
  calendarControl = this.fb.control(new Date());

  format = 'dd.MM.yyyy';

  form = this.fb.group({
    input: this.inputControl,
    calendar: this.calendarControl
  });

  get mobile() {
    return this.breakpoint.current === Breakpoint.mobile;
  }

  @HostBinding('attr.opened')
  opened = false;

  @PropertyApi({
    description: 'Placeholder for date picker',
    type: 'string'
  })
  @Input() placeholder = '';

  @PropertyApi({
    description: 'Date picker features',
    path: 'ui.feature',
    options: [Feature.clock]
  })
  @HostBinding('attr.features')
  @Input() features: Feature[] = [];

  @ViewChild('calendarTemplate', {static: true}) calendarTemplate;

  onChange: (value: any) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(private logger: NGXLogger,
              private fb: FormBuilder,
              private breakpoint: BreakpointService) {
  }

  ngOnInit() {
    this.calendarControl.valueChanges.pipe(distinctUntilChanged())
      .subscribe(date => {
        this.inputControl.patchValue(!!date ? formatDate(date, this.format) : null);
        this.onChange(date);
        this.opened = false;
        if (!!this.reference.popover) {
          this.reference.popover.hide();
          this.reference.popover = null;
        }
      });

    this.inputControl.valueChanges.pipe(debounceTime(INPUT_DELAY), distinctUntilChanged())
      .subscribe(date => {
        const parsed = parse(date, this.format, new Date());
        if (parsed instanceof Date && !isNaN(parsed.getTime())) {
          this.calendarControl.patchValue(parsed);
        }
        if (!!this.reference.popover) {
          this.reference.popover.hide();
          this.reference.popover = null;
        }
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
    disabled ? this.inputControl.disable({emitEvent: false}) : this.inputControl.enable({emitEvent: false});
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
