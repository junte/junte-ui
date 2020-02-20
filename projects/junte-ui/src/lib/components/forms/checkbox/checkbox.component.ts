import { Component, ElementRef, forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Size } from '../../../enums/size';
import { UI } from '../../../enums/ui';
import { PropertyApi } from '../../../decorators/api';

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
    type: 'strign'
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
  @HostBinding('attr.size')
  @Input()
  size: Size = Size.normal;

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

}
