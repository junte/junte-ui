import { Component, ContentChildren, forwardRef, HostBinding, Input, QueryList } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PropertyApi } from '../../core/decorators/api';
import { Orientation } from '../../core/enums/orientation';
import { UI } from '../../core/enums/ui';
import { isEqual } from '../../core/utils/equal';
import { SwitcherOptionComponent } from './switcher-option.component';

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

  ui = UI;

  @HostBinding('attr.data-type')
  _type: Orientation = Orientation.horizontal;

  @PropertyApi({
    description: 'Switcher orientation ',
    path: 'ui.orientation',
    default: Orientation.horizontal,
    options: [Orientation.horizontal, Orientation.vertical]
  })
  @Input() set type(type: Orientation) {
    this._type = type || Orientation.horizontal;
  }

  @PropertyApi({
    description: 'Set disabled state',
    type: 'boolean',
    default: 'false',
  })
  @HostBinding('attr.data-disabled')
  @Input()
  disabled = false;

  @PropertyApi({
    description: 'Select key field',
    type: 'string',
    default: 'key'
  })
  @Input() keyField: string;

  @ContentChildren(SwitcherOptionComponent)
  options: QueryList<SwitcherOptionComponent>;

  private _value: any;

  set value(value: any) {
    this._value = value;
    this.onChange(value);
  }

  get value() {
    return this._value;
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

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  selectOption(value: any) {
    let isSame = false;
    if (!!this.keyField && !!this.value && !!value) {
      isSame = this.value[this.keyField] === value[this.keyField];
    } else {
      isSame = isEqual(this.value, value);
    }

    this.value = !isSame ? value : null;
  }

}
