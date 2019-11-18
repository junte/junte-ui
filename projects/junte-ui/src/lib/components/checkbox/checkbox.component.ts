import { Component, ElementRef, forwardRef, HostBinding, Input } from '@angular/core';
import { Sizes, UI } from '../../enum/ui';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'jnt-checkbox',
  templateUrl: './checkbox.encapsulated.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
  }]
})
export class CheckboxComponent implements ControlValueAccessor {

  ui = UI;

  @HostBinding('attr.host')
  readonly host = 'jnt-checkbox-host';

  @HostBinding('attr.disabled')
  @Input()
  disabled = false;

  @HostBinding('attr.checked')
  checked = false;

  @HostBinding('attr.label')
  @Input()
  label: string;

  @HostBinding('attr.size')
  @Input()
  size: Sizes = Sizes.normal;

  @Input() value: any;

  constructor(public element: ElementRef) {
  }

  onChange(value: any) {
  }

  onTouched() {
  }

  writeValue(value: any) {
    if (!!value) {
      this.checked = value;
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

}
