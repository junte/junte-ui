import { Component, forwardRef, HostBinding, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PropertyApi } from '../../../decorators/api';
import { Size } from '../../../enums/size';
import { TextAlign } from '../../../enums/text';
import { InputState, InputType, UI } from '../../../enums/ui';

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

  inputControl = this.fb.control(null);
  form = this.fb.group({
    input: this.inputControl
  });

  @HostBinding('attr.state')
  _state: InputState = InputState.normal;

  @HostBinding('attr.type')
  _type: InputType = InputType.text;

  @HostBinding('attr.size')
  _size: Size = Size.normal;

  @PropertyApi({
    description: 'Icon for input',
    type: 'string',
  })
  @HostBinding('attr.icon')
  @Input() icon: string;

  @PropertyApi({
    description: 'Label for input',
    type: 'string',
  })
  @HostBinding('attr.label')
  @Input() label: string;

  @PropertyApi({
    description: 'Input text align',
    path: 'ui.text.align.',
    default: TextAlign.left,
    options: [TextAlign.left, TextAlign.right]
  })
  @HostBinding('attr.textAlign')
  @Input() textAlign: TextAlign = TextAlign.left;

  @PropertyApi({
    description: 'Input placeholder',
    type: 'string',
  })
  @Input() placeholder = '';

  @PropertyApi({
    description: 'Minimum number value that can be entered. For input with typeControl = number',
    type: 'number',
  })
  @Input() min: number;

  @PropertyApi({
    description: 'Maximum number value that can be entered. For input with typeControl = number',
    type: 'number',
  })
  @Input() max: number;

  @PropertyApi({
    description: 'Input states',
    path: 'ui.state',
    default: InputState.normal,
    options: [InputState.normal, InputState.success, InputState.failed]
  })
  @Input() set state(state: InputState) {
    this._state = state || InputState.normal;
  }

  @PropertyApi({
    description: 'Input typeControl',
    path: 'ui.form.input',
    default: InputType.text,
    options: [InputType.text, InputType.number, InputType.password]
  })
  @Input() set type(type: InputType) {
    this._type = type || InputType.text;
  }

  get type() {
    return this._type;
  }

  @PropertyApi({
    description: 'Input size',
    path: 'ui.size',
    default: Size.normal,
    options: [Size.small, Size.normal, Size.large]
  })
  @Input() set size(size: Size) {
    this._size = size || Size.normal;
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.inputControl.valueChanges.subscribe(value => this.onChange(value));
  }

  writeValue(value) {
    this.inputControl.patchValue(value);
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
