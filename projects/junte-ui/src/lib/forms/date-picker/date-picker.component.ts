import { Component, forwardRef, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { format as formatDate, parse } from 'date-fns';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';
import { PopoverComponent } from '../../overlays/popover/popover.component';

const INPUT_DELAY = 500;

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
  popover: PopoverComponent;
  opened: boolean;

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

  @ViewChild('calendarTemplate', {static: true}) calendarTemplate;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.calendarControl.valueChanges.subscribe(date => {
      this.inputControl.patchValue(!!date ? formatDate(date, this.format) : null);
      this.onChange(date);
      this.opened = false;
      if (!!this.popover) {
        this.popover.hide();
      }
    });

    this.inputControl.valueChanges.pipe(debounceTime(INPUT_DELAY), distinctUntilChanged())
      .subscribe(date => {
        this.updateCalendar(parse(date, this.format, new Date()));
        if (!!this.popover) {
          this.popover.hide();
        }
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

  writeValue(value: Date) {
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

}
