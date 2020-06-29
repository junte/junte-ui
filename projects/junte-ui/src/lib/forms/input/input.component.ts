import { Component, ElementRef, EventEmitter, forwardRef, HostBinding, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs/operators';
import { PropertyApi } from '../../core/decorators/api';
import { Size } from '../../core/enums/size';
import { State } from '../../core/enums/state';
import { TextAlign } from '../../core/enums/text';
import { UI } from '../../core/enums/ui';
import { InputScheme, InputType } from './enums';

const BACKSPACE = 8;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const TAB = 9;
const ENTER = 13;
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
  inputState = State;
  view = {password: {display: false}};

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
  @Input() min: number = null;

  @PropertyApi({
    description: 'Maximum number value that can be entered. For input with typeControl = number',
    type: 'number',
  })
  @Input() max: number = null;

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
    path: 'ui.state',
    options: [State.loading, State.warning, State.checked]
  })
  @HostBinding('attr.data-state')
  @Input() state: State;

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

  onChange: (value: any) => {};
  onTouched: () => {};
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.inputControl.valueChanges.pipe(distinctUntilChanged())
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

  keydownMask(event: KeyboardEvent) {
    const value = this.inputControl.value || '';
    let data;
    if (DIGIT_KEYS.includes(event.key)) {
      data = this.masking(value + event.key);
    } else if (event.keyCode === BACKSPACE) {
      data = this.masking(value.substr(0, value.length - 1));
    } else if (event.keyCode === TAB
      || event.keyCode === LEFT_ARROW
      || event.keyCode === RIGHT_ARROW) {
      return;
    }
    event.preventDefault();
    if (data !== undefined) {
      this.form.setValue(data);
    }
  }

  keydown(event: KeyboardEvent) {
    if (this.type === InputType.number &&
      (this.inputControl.value && this.inputControl.value.length === 1 && event.keyCode === BACKSPACE)) {
      this.inputControl.patchValue(null);
    }
    if (event.keyCode === ENTER) {
      event.preventDefault();
    }
  }

  blur() {
    this.onTouched();
    if (this.type === InputType.number) {
      if (this.inputControl.value === '' || this.inputControl.value === null) {
        this.inputControl.patchValue(null);
        return;
      }

      let number = +this.inputControl.value;

      if (this.max !== null && number > this.max) {
        number = this.max;
      }

      if (this.min !== null && number < this.min) {
        number = this.min;
      }

      this.inputControl.patchValue(number.toString());
    }
  }

  writeValue(value) {
    this.form.patchValue(!!this.mask ? this.masking(value) : {input: value}, {emitEvent: false});
  }

  setDisabledState(disabled: boolean) {
    disabled ? this.inputControl.disable() : this.inputControl.enable();
  }

  up() {
    let number = +this.inputControl.value;
    if (this.inputControl.value === '' || this.inputControl.value === null) {
      this.inputControl.patchValue(number);
    } else if (this.max === null || number < this.max) {
      this.inputControl.patchValue(++number);
    }
  }

  down() {
    let number = +this.inputControl.value;
    if (this.inputControl.value === '' || this.inputControl.value === null) {
      this.inputControl.patchValue(number);
    } else if (this.max === null || number < this.max) {
      this.inputControl.patchValue(--number);
    }
  }
}
