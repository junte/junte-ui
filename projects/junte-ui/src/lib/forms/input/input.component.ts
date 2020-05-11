import { BACKSPACE } from '@angular/cdk/keycodes';
import { Component, ElementRef, EventEmitter, forwardRef, HostBinding, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PropertyApi } from '../../core/decorators/api';
import { Size } from '../../core/enums/size';
import { TextAlign } from '../../core/enums/text';
import { UI } from '../../core/enums/ui';
import { InputScheme, InputState, InputType } from './enums';

const DIGIT_MASK_CHAR = '_';
const DIGIT_KEYS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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
  inputType = InputType;
  inputState = InputState;
  private _mask: string;

  @HostBinding('attr.host') readonly host = 'jnt-input-host';

  inputControl = this.fb.control(null);
  formattedControl = this.fb.control(null);
  form = this.fb.group({
    input: this.inputControl,
    formatted: this.formattedControl
  });

  @ViewChild('input', {read: ElementRef, static: false})
  input: ElementRef<any>;

  @HostBinding('attr.data-scheme')
  _scheme: InputScheme = InputScheme.normal;

  _type: InputType = InputType.text;

  @HostBinding('attr.data-size')
  _size: Size = Size.normal;

  @PropertyApi({
    description: 'Icon for input',
    type: 'string',
  })
  @Input() icon: string;

  @PropertyApi({
    description: 'Label for input',
    type: 'string',
  })
  @Input() label: string;

  @PropertyApi({
    description: 'Auto complete for input',
    type: 'string',
  })
  @Input() autocomplete: string;

  @PropertyApi({
    description: 'Input text align',
    path: 'ui.text.align.',
    default: TextAlign.left,
    options: [TextAlign.left, TextAlign.right]
  })
  @HostBinding('attr.data-textAlign')
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
    description: 'Used to specify that the input field is read-only',
    type: 'boolean',
    default: 'false'
  })
  @Input() readonly = false;

  @PropertyApi({
    description: 'Input scheme',
    path: 'ui.state',
    default: InputScheme.normal,
    options: [InputScheme.normal, InputScheme.success, InputScheme.failed]
  })
  @Input() set scheme(scheme: InputScheme) {
    this._scheme = scheme || InputScheme.normal;
  }

  @PropertyApi({
    description: 'Input typeControl',
    path: 'ui.forms.input',
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

  @PropertyApi({
    description: 'Input state',
    path: 'ui.forms.input.state',
    options: [InputState.loading, InputState.warning, InputState.checked]
  })
  @HostBinding('attr.data-state')
  @Input() state: InputState;

  @PropertyApi({
    description: 'Allow multiple lines in input',
    type: 'boolean',
    default: 'false',
  })
  @Input() multiline = false;

  @PropertyApi({
    description: 'Max rows for multi line mode',
    type: 'int',
    default: 5,
  })
  @Input() rows = 5;

  @PropertyApi({
    description: 'Mask patter where _ - is digit',
    type: 'string',
    default: null
  })
  @Input()
  set mask(mask: string) {
    this._mask = mask;
    if (!!mask) {
      this.formattedControl.setValue(mask);
    }
  }

  get mask() {
    return this._mask;
  }

  @PropertyApi({
    description: 'Click event',
    path: 'EventEmitter'
  })
  @Output() click = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.inputControl.valueChanges
      .subscribe(value => this.onChange(value));
    this.formattedControl.valueChanges
      .subscribe(formatted => {
        if (!!this.input) {
          const position = formatted.indexOf(DIGIT_MASK_CHAR);
          this.input.nativeElement.setSelectionRange(position, position);
        }
      });
  }

  private masking(value: string = null): {
    input: string,
    formatted: string
  } {
    let i, j = 0;
    const chars = value || '';
    let formatted = '';
    for (i = 0; i < this.mask.length; i++) {
      const char = this.mask.charAt(i);
      formatted += char === DIGIT_MASK_CHAR
        ? chars.charAt(j++) : char;
      if (j >= chars.length) {
        break;
      }
    }
    formatted += this.mask.substr(i + 1);
    return {input: chars.substr(0, j) || null, formatted};
  }

  keydown(event: KeyboardEvent) {
    event.preventDefault();
    const value = this.inputControl.value || '';
    let data;
    if (DIGIT_KEYS.includes(event.key)) {
      data = this.masking(value + event.key);
    } else if (event.keyCode === BACKSPACE) {
      data = this.masking(value.substr(0, value.length - 1));
    } else {
      return;
    }
    this.form.setValue(data);
  }

  writeValue(value) {
    this.form.patchValue(!!this.mask
      ? this.masking(value) : {input: value});
  }

  onChange(value: any) {
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
