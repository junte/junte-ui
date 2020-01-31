import { Component, forwardRef, HostBinding, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PropertyApi } from '../../../decorators/api';
import { Sizes, UI } from '../../../enums/ui';

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

  switchControl = this.fb.control(null);
  form = this.fb.group({
    switch: this.switchControl
  });

  @HostBinding('attr.size')
  _size: Sizes = Sizes.normal;

  @HostBinding('attr.checked')
  checked = false;

  @PropertyApi({
    description: 'Label for switch',
    type: 'string',
  })
  @Input() label: string;

  @PropertyApi({
    description: 'Icon for switch-on state',
    type: 'string',
  })
  @Input() iconOn: string;

  @PropertyApi({
    description: 'Icon for switch-off state',
    type: 'string',
  })
  @Input() iconOff: string;

  @PropertyApi({
    description: 'Label for switch-on state',
    type: 'string',
  })
  @Input() labelOn: string;

  @PropertyApi({
    description: 'Label for switch-off state',
    type: 'string',
  })
  @Input() labelOff: string;

  @PropertyApi({
    description: 'Input size',
    path: 'ui.sizes',
    default: Sizes.normal,
    options: [Sizes.tiny, Sizes.small, Sizes.normal, Sizes.large]
  })
  @Input() set size(size: Sizes) {
    this._size = size || Sizes.normal;
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.switchControl.valueChanges.subscribe(value => {
      this.onChange(value);
      this.checked = value;
    });
  }

  onChange(val: boolean) {
  }

  onTouched() {
  }

  writeValue(value) {
    this.switchControl.patchValue(value);
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
