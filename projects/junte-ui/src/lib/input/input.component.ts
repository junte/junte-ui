import {Component, forwardRef, HostBinding, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Schemes} from '../enum/ui';

@Component({
  selector: 'ju-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  @HostBinding('attr.scheme')
  @Input()
  scheme: Schemes;

  @Input()
  placeholder: string;

  private _value: string;

  constructor() {
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
  }

  writeValue(value) {
    if (!value || typeof(value) !== 'string') {
      return;
    }
    this.value = value;
    this.onChange(value);
  }

  onChange: any = () => {
  };

  onTouched: any = () => {
  };

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }
}
