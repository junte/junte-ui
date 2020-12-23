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
import { filter, map, distinctUntilChanged } from 'rxjs/operators';
import { Key } from '../../core/enums/keyboard';
import { PropertyApi } from '../../core/decorators/api';
import { Feature } from '../../core/enums/feature';
import { Size } from '../../core/enums/size';
import { State } from '../../core/enums/state';
import { TextAlign, TextTransform } from '../../core/enums/text';
import { UI } from '../../core/enums/ui';
import { Width } from '../../core/enums/width';
import { InputAutocomplete, InputScheme, InputType } from './enums';

const DIGIT_MASK_CHAR = '_';
const DIGIT_KEYS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const DEFAULT_NUMBER = 0;

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

  @HostBinding('attr.host')
  readonly host = 'jnt-input-host';

  ui = UI;
  view = {password: {display: false}};

  private _mask: string;
  private _type: InputType = InputType.text;
  private _placeholder: string = '';

  inputControl = this.fb.control(null);
  formattedControl = this.fb.control(null);
  form = this.fb.group({
    input: this.inputControl,
    formatted: this.formattedControl
  });

  @ViewChild('valueInput', {read: ElementRef, static: false})
  valueInput: ElementRef;

  @ViewChild('maskedInput', {read: ElementRef, static: false})
  maskedInput: ElementRef;

  @HostBinding('attr.data-focused')
  focused = false;

  @HostBinding('attr.data-disabled')
  disabled = false;

  @HostBinding('attr.data-scheme')
  _scheme: InputScheme = InputScheme.normal;

  @HostBinding('attr.data-size')
  _size: Size = Size.normal;

  @HostBinding('attr.data-width')
  _width: Width = Width.default;

  @HostBinding('attr.data-with-icon')
  get withIcon() {
    return !!this.icon;
  }

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
    description: 'Name for input',
    type: 'string'
  })
  @Input()
  name: string = null;

  @PropertyApi({
    description: 'Text transform for input',
    path: 'ui.text.transform',
    options: [TextTransform.capitalize, TextTransform.uppercase, TextTransform.lowercase]
  })
  @Input()
  transform: TextTransform;

  @PropertyApi({
    description: 'Auto complete for input',
    path: 'ui.input.autocomplete',
    options: [InputAutocomplete.on, InputAutocomplete.off]
  })
  @Input()
  autocomplete: InputAutocomplete = InputAutocomplete.off;

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
    description: 'Input placeholder',
    type: 'string',
  })
  @Input()
  set placeholder(placeholder: string) {
    this._placeholder = placeholder || '';
  }

  get placeholder() {
    return this._placeholder;
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
    description: 'Input width',
    path: 'ui.width',
    default: Width.default,
    options: [Width.default, Width.fluid]
  })
  @Input() set width(width: Width) {
    this._width = width || Width.default;
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
    description: 'Button for reset input; Allow multiple lines in input',
    path: 'ui.feature',
    options: [Feature.allowEmpty, Feature.multiline],
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
    this.inputControl.valueChanges.subscribe(value =>
      this.onChange(!!value ? (this.type === InputType.number ? +value : value) : null));

    this.formattedControl.valueChanges.pipe(
      distinctUntilChanged(),
      filter(() => !!this.maskedInput),
      map(formatted => !!formatted ? formatted : this.mask)
    ).subscribe(formatted => {
      const position = formatted.indexOf(DIGIT_MASK_CHAR);
      this.maskedInput.nativeElement.setSelectionRange(position, position);

      let cleared = {input: null, formatted: null};
      for (let i = 0; i < this.mask.length; i++) {
        if (this.mask.charAt(i) !== formatted.charAt(i)) {
          cleared = this.masking(formatted.substr(i));
          break;
        }
      }
      if (cleared.input !== this.inputControl.value || cleared.formatted !== this.formattedControl.value) {
        this.form.setValue(cleared);
      }
    });
  }

  private masking(value: string = null): {
    input: string,
    formatted: string
  } {
    const chars = !!value ? value.replace(/\D/gi, '') : '';
    let formatted = this.mask;
    const length = this.mask.split(DIGIT_MASK_CHAR).length - 1;
    for (let char of chars) {
      formatted = formatted.replace(DIGIT_MASK_CHAR, char);
    }

    return {
      input: chars.substr(0, length) || null,
      formatted: formatted !== this.mask ? formatted : null
    };
  }

  pasteMask(event: ClipboardEvent) {
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
    } else if (event.key === Key.backspace) {
      data = this.masking(value.substr(0, value.length - 1));
    } else if (event.key === Key.tab
      || event.key === Key.arrowLeft
      || event.key === Key.arrowRight
      || (event.ctrlKey || event.metaKey) && event.key === Key.v) {
      return;
    }
    event.preventDefault();
    if (data !== undefined) {
      this.form.setValue(data);
    }
  }

  keydown(event: KeyboardEvent) {
    if (this.type === InputType.number) {
      if (this.inputControl.value && this.inputControl.value.length === 1 && event.key === Key.backspace) {
        this.inputControl.setValue(null);
      }
    }
    if (event.key === Key.enter) {
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

  setNumber(step: number) {
    if (this.inputControl.value === '' || this.inputControl.value === null) {
      this.inputControl.setValue(DEFAULT_NUMBER);
    } else {
      let number = +this.inputControl.value + step;
      number = this.max !== undefined && this.max !== null ? Math.min(number, this.max) : number;
      number = this.min !== undefined && this.min !== null ? Math.max(number, this.min) : number;
      this.inputControl.setValue(number);
    }
  }

  clear(event: MouseEvent) {
    this.inputControl.setValue(null);
    this.formattedControl.setValue(this.mask);
    event.stopPropagation();
  }

  focus() {
    if (!!this.valueInput) {
      this.valueInput.nativeElement.focus();
    } else if (!!this.maskedInput) {
      this.maskedInput.nativeElement.focus();
    }
  }
}
