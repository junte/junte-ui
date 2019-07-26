import { Component, ContentChildren, forwardRef, HostBinding, QueryList } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isEqual } from '../../utils/equal';
import { UI } from '../../enum/ui';
import { SwitcherOptionComponent } from './option/switcher-option.component';

@Component({
  selector: 'jnt-switcher',
  templateUrl: './switcher.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitcherComponent),
      multi: true
    }
  ]
})
export class SwitcherComponent implements ControlValueAccessor {

  @HostBinding('attr.host') readonly host = 'jnt-switcher-host';

  @ContentChildren(SwitcherOptionComponent)
  options: QueryList<SwitcherOptionComponent>;

  ui = UI;

  private _value: any;

  set value(value: any) {
    this._value = value;
    this.onChange(this.value);
  }

  get value() {
    return this._value;
  }

  constructor() {
  }

  writeValue(value: any) {
    this.value = value;
  }

  onChange(value: any) {
  }

  onTouched() {
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  selectOption(value: any) {
    this.value = !isEqual(value, this.value) ? value : null;
  }

}
