import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  ContentChild,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  TemplateRef
} from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { PropertyApi } from '../../core/decorators/api';
import { Size } from '../../core/enums/size';
import { UI } from '../../core/enums/ui';
import { LOGGER_PROVIDERS } from '../../core/logger/providers';

enum AnimationState {
  default = 'default',
  checked = 'checked',
  unchecked = 'unchecked'
}

@Component({
  selector: 'jnt-radio',
  templateUrl: './radio.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    },
    ...LOGGER_PROVIDERS
  ],
  animations: [
    trigger('scale', [
        transition(`* => ${AnimationState.default}`, []),
        transition(':enter', [
          style({transform: 'scale(0)'}),
          animate('.3s', style({transform: 'scale(1)'}))
        ]),
        transition(':leave', [
          style({transform: 'scale(1)'}),
          animate('.3s', style({transform: 'scale(0)'}))
        ])
      ]
    )
  ]
})
export class RadioComponent implements ControlValueAccessor, OnInit {

  ui = UI;
  animate = AnimationState.default;

  @HostBinding('attr.host')
  readonly host = 'jnt-radio-host';

  radioControl = this.fb.control(false);
  form = this.fb.group({
    radio: this.radioControl
  });

  @HostBinding('attr.data-checked')
  get checked() {
    return this.radioControl.value;
  }

  @HostBinding('attr.data-size')
  _size = Size.normal;

  @PropertyApi({
    description: 'Size for radio button',
    type: 'string',
    path: 'ui.size',
    options: [
      Size.tiny,
      Size.small,
      Size.normal,
      Size.large
    ],
    default: Size.normal
  })
  @Input()
  set size(size: Size) {
    this._size = size || Size.normal;
  }

  @PropertyApi({
    description: 'Label name for radio button',
    type: 'string'
  })
  @Input()
  label: string;

  @PropertyApi({
    description: 'Value for radio button',
    type: 'any'
  })
  @Input()
  value: any;

  @ContentChild('radioLabelTemplate')
  labelTemplate: TemplateRef<any>;

  onChange: (value: any) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(private fb: FormBuilder,
              private logger: NGXLogger) {
  }

  ngOnInit() {
    this.radioControl.valueChanges
      .subscribe(checked => {
        this.animate = checked ? AnimationState.checked : AnimationState.unchecked;
        // TODO: check this
        this.onChange(true);
      });
  }

  writeValue(value: boolean) {
    this.radioControl.setValue(value, {emitEvent: false});
  }

  setDisabledState(disabled: boolean) {
    disabled ? this.radioControl.disable({emitEvent: false})
      : this.radioControl.enable({emitEvent: false});
  }
}
