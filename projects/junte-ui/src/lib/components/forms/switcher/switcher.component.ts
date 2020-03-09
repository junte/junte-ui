import { Component, ContentChild, ContentChildren, forwardRef, HostBinding, Input, QueryList, TemplateRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PropertyApi } from '../../../decorators/api';
import { Orientation } from '../../../enums/orientation';
import { UI } from '../../../enums/ui';
import { isEqual } from '../../../utils/equal';
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

  @HostBinding('attr.type')
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

  selectOption(value: any) {
    this.value = !isEqual(value, this.value) ? value : null;
  }

}
