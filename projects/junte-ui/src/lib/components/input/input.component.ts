import { Component, forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Icons, InputState, InputType, Sizes } from '../../enum/ui';

@Component({
  selector: 'jnt-input',
  templateUrl: './input.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  @HostBinding('attr.host') readonly host = 'jnt-input-host';

  @HostBinding('attr.state')
  @Input()
  state: InputState = InputState.normal;

  @Input()
  disabled = false;

  @HostBinding('attr.type')
  @Input()
  type: InputType = InputType.text;

  @HostBinding('attr.icon')
  @Input()
  icon: Icons;

  @HostBinding('attr.size')
  @Input()
  size: Sizes = Sizes.normal;

  @HostBinding('attr.label')
  @Input()
  label: string;

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
