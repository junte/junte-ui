import { Component, forwardRef, HostBinding, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
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

  @HostBinding('attr.size')
  _size: Size = Size.normal;

  @HostBinding('attr.checked')
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
    description: 'Input size',
    path: 'ui.size',
    default: Size.normal,
    options: [Size.tiny, Size.small, Size.normal, Size.large]
  })
  @Input() set size(size: Size) {
    this._size = size || Size.normal;
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.switchControl.valueChanges
      .subscribe(value => this.onChange(value));
  }

  onChange(value: boolean) {
  }

  onTouched() {
  }

  writeValue(value) {
    this.switchControl.setValue(value, {emitEvent: false});
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean) {
    disabled ? this.switchControl.disable() : this.switchControl.enable();
  }

}
