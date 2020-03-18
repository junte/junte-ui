import { Component, forwardRef, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { format as formatDate } from 'date-fns';
import { PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';
import { PopoverComponent } from '../../overlays/popover/popover.component';

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
export class DatePickerComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-date-picker-host';

  private _format = 'dd.MM.yyyy';

  ui = UI;
  popover: PopoverComponent;

  inputControl = this.fb.control(null);
  calendarControl = this.fb.control(null);

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
    description: 'Date format',
    type: 'string',
    default: 'dd.MM.yyyy'
  })
  @Input() set format(format: string) {
    this._format = format || 'dd.MM.yyyy';
    this.inputControl.patchValue(!!this.calendarControl.value
      ? formatDate(this.calendarControl.value, this.format) : null);
  }

  get format() {
    return this._format;
  }

  @ViewChild('calendarTemplate', {static: true}) calendarTemplate;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.calendarControl.valueChanges.subscribe(date => {
      this.inputControl.patchValue(!!date ? formatDate(date, this.format) : null);
      this.onChange(date);
      if (!!this.popover) {
        this.popover.hide();
      }
    });
  }

  onChange(value: any) {
  }

  onTouched() {
  }

  writeValue(value: Date) {
    this.calendarControl.patchValue(value);
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

}
