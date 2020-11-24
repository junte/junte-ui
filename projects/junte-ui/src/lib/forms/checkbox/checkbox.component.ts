import { Component, ContentChild, forwardRef, HostBinding, HostListener, Input, OnInit, TemplateRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
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
export class CheckboxComponent implements ControlValueAccessor, OnInit {

  ui = UI;

  @HostBinding('attr.host')
  readonly host = 'jnt-checkbox-host';

  @HostBinding('attr.data-size')
  _size: Size = Size.normal;

  @PropertyApi({
    description: 'Label name for checkbox',
    type: 'string'
  })
  @HostBinding('attr.label')
  @Input()
  label: string;

  @ContentChild('labelTemplate')
  labelTemplate: TemplateRef<any>;

  @PropertyApi({
    description: 'Size for checkbox',
    path: 'ui.size',
    options: [
      Size.tiny,
      Size.small,
      Size.normal,
      Size.large
    ],
    default: Size.normal
  })
  @Input()
  set size(size: Size) {
    this._size = size || Size.normal;
  }

  @PropertyApi({
    description: 'Value for checkbox',
    type: 'any'
  })
  @Input()
  value: any;

  checkboxControl = this.fb.control(false);
  form = this.fb.group({
    checkbox: this.checkboxControl
  });

  onChange: (value: any) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(private fb: FormBuilder,
              private logger: NGXLogger) {
  }

  ngOnInit() {
    this.checkboxControl.valueChanges
      .subscribe(value => this.onChange(value));
  }

  writeValue(value: boolean) {
    this.checkboxControl.setValue(!!value, {emitEvent: false});
  }

  setDisabledState(disabled: boolean) {
    disabled ? this.checkboxControl.disable({emitEvent: false})
      : this.checkboxControl.enable({emitEvent: false});
  }
}
