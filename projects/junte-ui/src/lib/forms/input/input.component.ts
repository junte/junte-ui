import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { PropertyApi } from '../../core/decorators/api';
import { Feature } from '../../core/enums/feature';
import { Size } from '../../core/enums/size';
import { State } from '../../core/enums/state';
import { TextAlign, TextTransform } from '../../core/enums/text';
import { UI } from '../../core/enums/ui';
import { InputScheme, InputType } from './enums';

const BACKSPACE = 'Backspace';
const LEFT_ARROW = 'ArrowLeft';
const RIGHT_ARROW = 'ArrowRight';
const TAB = 'Tab';
const ENTER = 'Enter';
const KEYV = 'v';
const UNIDENTIFIED = 'Unidentified';
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

  @HostBinding('attr.host') readonly host = 'jnt-input-host';

  ui = UI;
  inputType = InputType;
  inputState = State;
  feature = Feature;
  view = {password: {display: false}};

  private _mask: string;

  inputControl = this.fb.control(null);
  formattedControl = this.fb.control(null);
  form = this.fb.group({
    input: this.inputControl,
    formatted: this.formattedControl
  });

  @ViewChild('input', {read: ElementRef, static: false})
  input: ElementRef;

  @HostBinding('attr.data-focused')
  focused = false;

  @HostBinding('attr.data-disabled')
  disabled = false;

  @HostBinding('attr.data-scheme')
  _scheme: InputScheme = InputScheme.normal;

  _type: InputType = InputType.text;

  @HostBinding('attr.data-size')
  _size: Size = Size.normal;

  @PropertyApi({
    description: 'Icon for input',
    type: 'string',
  })
  @Input()
  icon: string;

  @PropertyApi({
    description: 'Label for input',
    type: 'string',
  })
  @Input()
  label: string;

  @PropertyApi({
    description: 'Text transform for input',
    type: 'TextTransform',
    options: [TextTransform.capitalize, TextTransform.uppercase, TextTransform.lowercase]
  })
  @Input()
  transform: TextTransform;

  @PropertyApi({
    description: 'Auto complete for input',
    type: 'string',
  })
  @Input()
  autocomplete: string;

  @PropertyApi({
    description: 'Input text align',
    path: 'ui.text.align',
    default: TextAlign.left,
    options: [TextAlign.left, TextAlign.right]
  })
  @HostBinding('attr.data-textAlign')
  @Input()
  textAlign: TextAlign = TextAlign.left;

  @PropertyApi({
    description: 'Input placeholder',
    type: 'string',
  })
  @Input()
  placeholder = '';

  @PropertyApi({
    description: 'Minimum number value that can be entered. For input with typeControl = number',
    type: 'number',
  })
  @Input()
  min: number = null;

  @PropertyApi({
    description: 'Maximum number value that can be entered. For input with typeControl = number',
    type: 'number',
  })
  @Input()
  max: number = null;

  @PropertyApi({
    description: 'Step for entered value. For input with typeControl = number',
    type: 'number',
  })
  @Input()
  step = 1;

  @PropertyApi({
    description: 'Used to specify that the input field is read-only',
    type: 'boolean',
    default: 'false'
  })
  @Input()
  readonly = false;

  @PropertyApi({
    description: 'Input scheme',
    path: 'ui.input.scheme',
    default: InputScheme.normal,
    options: [InputScheme.normal, InputScheme.success, InputScheme.failed]
  })
  @Input()
  set scheme(scheme: InputScheme) {
    this._scheme = scheme || InputScheme.normal;
  }

  @PropertyApi({
    description: 'Input typeControl',
    path: 'ui.input.type',
    default: InputType.text,
    options: [InputType.text, InputType.number, InputType.password]
  })
  @Input()
  set type(type: InputType) {
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
  @Input()
  set size(size: Size) {
    this._size = size || Size.normal;
  }

  @PropertyApi({
    description: 'Input state',
    path: 'ui.state',
    options: [State.loading, State.warning, State.checked]
  })
  @HostBinding('attr.data-state')
  @Input()
  state: State;

  @PropertyApi({
    description: 'Allow multiple lines in input',
    type: 'boolean',
    default: 'false',
  })
  @HostBinding('attr.data-multiline')
  @Input()
  multiline = false;

  @PropertyApi({
    description: 'Max rows for multiline mode',
    type: 'number',
    default: 5,
  })
  @Input()
  rows = 5;

  @PropertyApi({
    description: 'Mask pattern where _ - is digit',
    type: 'string',
    default: null
  })
  @Input()
  set mask(mask: string) {
    this._mask = mask;
    if (!!mask) {
      this.form.setValue(this.masking(this.inputControl.value || ''));
    }
  }

  get mask() {
    return this._mask;
  }

  @PropertyApi({
    description: 'Button for reset input',
    path: 'ui.feature',
    options: [Feature.clear],
  })
  @HostBinding('attr.data-features')
  @Input()
  features: Feature[] = [];

  @PropertyApi({
    description: 'Click event',
    path: 'EventEmitter'
  })
  @Output()
  click = new EventEmitter<any>();

  @HostBinding('attr.tabindex')
  tabindex = 1;

  onChange: (value: any) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(private logger: NGXLogger,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.inputControl.valueChanges.pipe(distinctUntilChanged())
      .subscribe(value =>
        this.onChange(!!value ? (this.type === InputType.number ? +value : value) : null));

    this.formattedControl.valueChanges.pipe(
      filter(() => !!this.input),
      map(formatted => !!formatted ? formatted : this.mask)
    ).subscribe(formatted => {
        const position = formatted.indexOf(DIGIT_MASK_CHAR);
        this.input.nativeElement.setSelectionRange(position, position);
      });
  }

  private masking(value: string = null): {
    input: string,
    formatted: string
  } {
    let i, j = 0;
    const chars = !!value ? value.replace(/\D/gi, '') : (value || '');
    let formatted = '';
    for (i = 0; i < this.mask.length; i++) {
      const char = this.mask.charAt(i);
      formatted += char === DIGIT_MASK_CHAR ? (chars.charAt(j++) || DIGIT_MASK_CHAR) : char;
      if (j >= chars.length) {
        break;
      }
    }
    formatted += this.mask.substr(i + 1);
    return {
      input: chars.substr(0, j) || null, formatted
    };
  }

  paste(event: ClipboardEvent) {
    event.preventDefault();
    const text = event.clipboardData.getData('text');
    const data = this.masking(text);
    this.form.setValue(data);
  }

  keydownMask(event: KeyboardEvent) {
    const value = this.inputControl.value || '';
    let data;

    if (DIGIT_KEYS.includes(event.key)) {
      data = this.masking(value + event.key);
    } else if (event.key === BACKSPACE || event.key === UNIDENTIFIED) {
      data = this.masking(value.substr(0, value.length - 1));
    } else if (event.key === TAB
      || event.key === LEFT_ARROW
      || event.key === RIGHT_ARROW
      || (event.ctrlKey || event.metaKey) && event.key === KEYV) {
      return;
    }
    event.preventDefault();
    if (data !== undefined) {
      this.form.setValue(data);
    }
  }

  keydown(event: KeyboardEvent) {
    if (this.type === InputType.number) {
      if (this.inputControl.value && this.inputControl.value.length === 1 && event.key === BACKSPACE) {
        this.inputControl.setValue(null);
      }
    }
    if (event.key === ENTER) {
      event.preventDefault();
    }
  }

  keyup() {
    let value = this.inputControl.value;

    if (this.type === InputType.text && !!this.transform && !!value) {
      switch (this.transform) {
        case TextTransform.capitalize:
          value = value.charAt(0).toUpperCase() + value.slice(1);
          break;
        case TextTransform.lowercase:
          value = value.toLowerCase();
          break;
        case TextTransform.uppercase:
          value = value.toUpperCase();
          break;
      }
      this.inputControl.setValue(value);
    }
  }

  writeValue(value) {
    this.form.patchValue(!!this.mask ? this.masking(value) : {input: value}, {emitEvent: false});
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  up() {
    let number = +this.inputControl.value;
    if (this.inputControl.value === '' || this.inputControl.value === null) {
      this.inputControl.setValue(number);
    } else if (this.max === null || number < this.max) {
      this.step ? this.inputControl.setValue(number + +this.step) : this.inputControl.setValue(++number);
    }
  }

  down() {
    let number = +this.inputControl.value;
    if (this.inputControl.value === '' || this.inputControl.value === null) {
      this.inputControl.setValue(number);
    } else if (this.max === null || number < this.max) {
      this.step ? this.inputControl.setValue(number - +this.step) : this.inputControl.setValue(--number);
    }
  }

  clear(event: MouseEvent) {
    this.inputControl.setValue(null);
    this.formattedControl.setValue(this.mask);
    event.stopPropagation();
  }
}
