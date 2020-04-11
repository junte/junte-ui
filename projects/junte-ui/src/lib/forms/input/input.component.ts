import { Component, ElementRef, forwardRef, HostBinding, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PropertyApi } from '../../core/decorators/api';
import { Size } from '../../core/enums/size';
import { TextAlign } from '../../core/enums/text';
import { UI } from '../../core/enums/ui';
import { InputScheme, InputState, InputType } from './enums';

export enum Pattern {
  Date = '??.??.????',
  Phone = '+7(???)-???-??-??'
}

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
  pattern = Pattern;

  @HostBinding('attr.host') readonly host = 'jnt-input-host';

  inputControl = this.fb.control(null);
  form = this.fb.group({
    input: this.inputControl
  });

  @HostBinding('attr.scheme')
  _scheme: InputScheme = InputScheme.normal;

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

  @PropertyApi({
    description: 'Input state',
    path: 'ui.form.input.state',
    options: [InputState.loading, InputState.warning, InputState.checked]
  })
  @HostBinding('attr.state')
  @Input() state: InputState;

  @PropertyApi({
    description: 'Allow multiple lines in input',
    type: 'boolean',
    default: 'false',
  })
  @Input() multiline = false;

  @PropertyApi({
    description: 'Mask specifies a regular expression the form control\'s value should match',
    type: 'string',
  })
  @Input() mask: string;

  @Input() rows: number;

  @Input()
  get maxlenght() {
    if (!!this.mask) {
      if (this.mask === Pattern.Date) {
        return 10;
      }
      if (this.mask === Pattern.Phone) {
        return 21;
      }
    }
  }

  get masking() {
    return this.mask ? this.mask.replace(/\?/g, '_') : null;
  }

  @ViewChild('input') input: ElementRef;

  @HostListener('mouseenter', ['$event'])
  checkEnter(e: KeyboardEvent) {
    if (!!this.masking && !this.inputControl.value) {
      this.inputControl.patchValue(this.masking);
    }
  }

  @HostListener('mouseleave', ['$event'])
  checkLeave(e: KeyboardEvent) {
    if (this.inputControl.value === this.masking) {
      this.inputControl.reset();
    }
  }

  @HostListener('click', ['$event'])
  setFocus() {
    this.input.nativeElement.setSelectionRange(this.inputControl.value.indexOf('_'), this.inputControl.value.indexOf('_'));
    this.input.nativeElement.focus();
  }

  @HostListener('keypress', ['$event'])
  press(e: KeyboardEvent) {
    if (!!this.masking) {
      if (!(+e.key === 1 || +e.key === 2 || +e.key === 3 || +e.key === 4 || +e.key === 5 || +e.key === 6 || +e.key === 7
        || +e.key === 8 || +e.key === 9 || +e.key === 0)) {
        return false;
      }
      e.preventDefault();
      this.inputControl.patchValue(this.inputControl.value.replace('_', e.key));
      this.input.nativeElement.setSelectionRange(this.inputControl.value.indexOf('_'), this.inputControl.value.indexOf('_'));
    }
  }

  constructor(private fb: FormBuilder, private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.inputControl.valueChanges
      .subscribe(value => this.onChange(value));
  }

  writeValue(value) {
    this.inputControl.patchValue(value);
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
