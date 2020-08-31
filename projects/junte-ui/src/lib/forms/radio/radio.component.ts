import { Component, ContentChild, forwardRef, HostBinding, HostListener, Input, OnInit, TemplateRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { PropertyApi } from '../../core/decorators/api';
import { Size } from '../../core/enums/size';
import { UI } from '../../core/enums/ui';

@Component({
  selector: 'jnt-radio',
  templateUrl: './radio.encapsulated.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioComponent),
    multi: true
  }]
})
export class RadioComponent implements ControlValueAccessor, OnInit {

  ui = UI;
  @HostBinding('attr.host') readonly host = 'jnt-radio-host';

  radioControl = this.fb.control(false);
  form = this.fb.group({
    radio: this.radioControl
  });

  @HostBinding('attr.data-size')
  _size = Size.normal;

  @PropertyApi({
    description: 'Size for radio button',
    type: 'string',
    path: 'ui.size',
    options: [Size.tiny,
      Size.small,
      Size.normal,
      Size.large],
    default: Size.normal
  })
  @Input()
  set size(size: Size) {
    this._size = size || Size.normal;
  }

  @PropertyApi({
    description: 'Label name for radio button',
    type: 'string'
  })
  @Input() label: string;

  @PropertyApi({
    description: 'Value for radio button',
    type: 'any'
  })
  @Input() value: any;

  @ContentChild('labelTemplate')
  labelTemplate: TemplateRef<any>;

  onChange: (value: any) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(private fb: FormBuilder,
              private logger: NGXLogger) {
  }

  ngOnInit() {
    this.radioControl.valueChanges.subscribe(value => this.onChange(value));
  }

  writeValue(value: boolean) {
    this.radioControl.setValue(!!value, {emitEvent: false});
  }

  setDisabledState(disabled: boolean) {
    disabled ? this.radioControl.disable() : this.radioControl.enable();
  }
}
