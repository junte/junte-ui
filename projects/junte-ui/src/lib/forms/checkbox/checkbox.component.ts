import { Component, ElementRef, forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PropertyApi } from '../../core/decorators/api';
import { Size } from '../../core/enums/size';
import { UI } from '../../core/enums/ui';

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

  @HostBinding('attr.size')
  _size: Size = Size.normal;

  @HostBinding('attr.host')
  readonly host = 'jnt-checkbox-host';

  @PropertyApi({
    description: 'Set disabled state',
    type: 'boolean',
    default: 'false',
  })
  @HostBinding('attr.disabled')
  @Input()
  disabled = false;

  @HostBinding('attr.checked')
  checked = false;

  @PropertyApi({
    description: 'Label name for checkbox button',
    type: 'string'
  })
  @HostBinding('attr.label')
  @Input()
  label: string;

  @PropertyApi({
    description: 'Size for checkbox button',
    type: 'string',
    path: 'ui.sizes',
    options: [Size.tiny, Size.small, Size.normal, Size.large],
    default: Size.normal
  })
  @Input()
  set size(size: Size) {
    this._size = size || Size.normal;
  }

  @PropertyApi({
    description: 'Value for checkbox button',
    type: 'string'
  })
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

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
