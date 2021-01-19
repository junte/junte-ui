import { Component, forwardRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { PropertyApi } from '../../core/decorators/api';
import { Size } from '../../core/enums/size';
import { UI } from '../../core/enums/ui';

@Component({
  selector: 'jnt-switch',
  templateUrl: './switch.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true
    }
  ]
})
export class SwitchComponent implements ControlValueAccessor, OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-switch-host';

  ui = UI;

  switchControl = this.fb.control(false);
  form = this.fb.group({
    switch: this.switchControl
  });

  @HostBinding('attr.data-size')
  _size: Size = Size.normal;

  @HostBinding('attr.data-focused')
  focused = false;

  get checked() {
    return this.switchControl.value;
  }

  @PropertyApi({
    description: 'Label for switch',
    type: 'string',
  })
  @Input() label: string;

  @PropertyApi({
    description: 'Icons for states',
    type: '{on: string, off: string}',
  })
  @Input()
  icons: { on?: string, off?: string };

  @PropertyApi({
    description: 'Tags for states',
    type: '{on: string, off: string}',
  })
  @Input()
  tags: { on?: string, off?: string };

  @PropertyApi({
    description: 'Switch size',
    path: 'ui.size',
    default: Size.normal,
    options: [Size.tiny, Size.small, Size.normal, Size.large]
  })
  @Input() set size(size: Size) {
    this._size = size || Size.normal;
  }

  onChange: (value: any) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(private logger: NGXLogger,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.switchControl.valueChanges
      .subscribe(value => this.onChange(value));
  }

  writeValue(value) {
    this.switchControl.setValue(value, {emitEvent: false});
  }

  setDisabledState(disabled: boolean) {
    disabled ? this.switchControl.disable({emitEvent: false}) : this.switchControl.enable({emitEvent: false});
  }

}
