import { Component, forwardRef, HostBinding, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { format } from 'date-fns';
import { PopoverTriggers, UI } from '../../enum/ui';
import { Subscriptions } from '../../utils/subscriptions';
import { PopoverService } from '../popover/popover.service';

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
export class DatePickerComponent implements OnInit, OnDestroy {

  @HostBinding('attr.host') readonly host = 'jnt-date-picker-host';
  @ViewChild('calendar', {static: true}) calendarControl;

  subscriptions = new Subscriptions();
  ui = UI;
  input = new FormControl();
  calendar = new FormControl(new Date);
  form = this.fb.group({
    input: this.input,
    calendar: this.calendar
  });
  options = null;

  @Input() placeholder: string;
  @Input() format: string = 'DD.MM.YYYY';

  constructor(private fb: FormBuilder,
              private popoverService: PopoverService) {
  }

  ngOnInit() {
    this.subscriptions.push('calendar', this.calendar.valueChanges.subscribe(date => {
      this.input.patchValue(format(date, this.format));
      this.onChange(date);
      this.popoverService.hide();
    }));

    this.options = {
      content: this.calendarControl,
      trigger: PopoverTriggers.click,
      maxWidth: '100%'
    };
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onChange(val: any) {
  }

  onTouched() {
  }

  writeValue(value: Date) {
    this.calendar.patchValue(value);
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

}
