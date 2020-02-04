import { Component, forwardRef, HostBinding, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { format as formatDate } from 'date-fns';
import { PropertyApi } from '../../../decorators/api';
import { UI } from '../../../enums/ui';
import { Subscriptions } from '../../../utils/subscriptions';
import { PopoverTriggers } from '../../overlays/popover/enums';
import { PopoverService } from '../../overlays/popover/popover.service';

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

  private _format = 'DD.MM.YYYY';

  @ViewChild('calendarTemplate', {static: true}) calendarTemplate;

  subscriptions = new Subscriptions();
  ui = UI;
  input = this.fb.control(null);
  calendar = this.fb.control(new Date);
  form = this.fb.group({
    input: this.input,
    calendar: this.calendar
  });
  options = null;

  @PropertyApi({
    description: 'Placeholder for date picker',
    type: 'string'
  })
  @Input() placeholder = '';

  @PropertyApi({
    description: 'Date format',
    type: 'string',
    default: 'DD.MM.YYYY'
  })
  @Input() set format(format: string) {
    this._format = format || 'DD.MM.YYYY';
    this.input.patchValue(!!this.calendar.value ? formatDate(this.calendar.value, this.format) : null);
  }

  get format() {
    return this._format;
  }

  constructor(private fb: FormBuilder,
              private popoverService: PopoverService) {
  }

  ngOnInit() {
    this.subscriptions.push('calendar', this.calendar.valueChanges.subscribe(date => {
      this.input.patchValue(!!date ? formatDate(date, this.format) : null);
      this.onChange(date);
      this.popoverService.hide();
    }));

    this.options = {
      contentTemplate: this.calendarTemplate,
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
