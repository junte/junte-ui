import {Component, forwardRef, HostBinding, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {InputType, Schemes} from '../../enum/ui';

@Component({
  selector: 'jnt-input',
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
  scheme: Schemes = Schemes.primary;

  @HostBinding('attr.type')
  @Input()
  type: InputType = InputType.text;

  @Input()
  placeholder: string;

  value: string = null;

  onChange = (val: any) => {
  };

  onTouched = () => {
  };

  writeValue(value) {
    this.value = value;
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }
}
