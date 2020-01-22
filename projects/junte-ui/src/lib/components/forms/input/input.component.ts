import { Component, forwardRef, HostBinding, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputState, InputType, Sizes, TextAlign, UI } from '../../../enums/ui';

@Component({
  selector: 'jnt-input',
  templateUrl: './input.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-input-host';

  @HostBinding('attr.state')
  @Input()
  state: InputState = InputState.normal;

  @HostBinding('attr.type')
  @Input()
  type: InputType = InputType.text;

  @HostBinding('attr.icon')
  @Input()
  icon: string;

  @HostBinding('attr.size')
  @Input()
  size: Sizes = Sizes.normal;

  @HostBinding('attr.label')
  @Input()
  label: string;

  @HostBinding('attr.textAlign')
  @Input()
  textAlign: TextAlign = TextAlign.left;

  @Input()
  placeholder: string;

  @Input()
  min: number;

  @Input()
  max: number;

  set value(value: any) {
    this.inputControl.patchValue(value);
    this.onChange(value);
  }

  inputControl = new FormControl({value: null});
  form = this.builder.group({input: this.inputControl});

  constructor(private builder: FormBuilder) {
  }

  ngOnInit() {
    this.inputControl.valueChanges.subscribe(value => this.onChange(value));
  }

  writeValue(value) {
    this.value = value;
  }

  onChange(val: any) {
  }

  onTouched() {
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean) {
    disabled ? this.inputControl.disable() : this.inputControl.enable();
  }

  up() {
    if (this.max !== undefined) {
      if (this.inputControl.value === null) {
        this.inputControl.patchValue(0);
      }
      if (this.inputControl.value < this.max) {
        this.inputControl.patchValue(+this.inputControl.value + 1);
      }
    } else {
      this.inputControl.patchValue(+this.inputControl.value + 1);
    }
  }

  down() {
    if (this.min !== undefined) {
      if (this.inputControl.value === null) {
        this.inputControl.patchValue(0);
      }
      if (this.inputControl.value > this.min) {
        this.inputControl.patchValue(+this.inputControl.value - 1);
      }
    } else {
      this.inputControl.patchValue(+this.inputControl.value - 1);
    }
  }
}
