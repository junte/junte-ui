import { Component, ElementRef, forwardRef, HostBinding, HostListener, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
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
  checked = false;

  @HostBinding('attr.data-size')
  _size: Size = Size.normal;

  @HostBinding('attr.host')
  readonly host = 'jnt-checkbox-host';

  @PropertyApi({
    description: 'Set disabled state',
    type: 'boolean',
    default: 'false',
  })
  @Input()
  disabled = false;

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

  onChange: (value: any) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(private logger: NGXLogger,
              public element: ElementRef) {
  }

  writeValue(value: any) {
    if (!!value) {
      this.checked = value;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  change() {
    this.checked = !this.checked;
    this.onChange(this.checked);
  }
}
