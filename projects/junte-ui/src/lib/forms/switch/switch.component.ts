import { Component, ContentChild, forwardRef, HostBinding, HostListener, Input, OnInit, TemplateRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { JunteUIConfig } from '../../config';
import { ContentApi, PropertyApi } from '../../core/decorators/api';
import { FlexAlign } from '../../core/enums/flex';
import { Size } from '../../core/enums/size';
import { SwitchStyle } from '../../core/enums/style';
import { UI } from '../../core/enums/ui';
import { LOGGER_PROVIDERS } from '../../core/logger/providers';

@Component({
  selector: 'jnt-switch',
  templateUrl: './switch.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true
    },
    ...LOGGER_PROVIDERS
  ]
})
export class SwitchComponent implements ControlValueAccessor, OnInit {

  @HostBinding('attr.host')
  readonly host = 'jnt-switch-host';

  ui = UI;
  styles = SwitchStyle;

  switchControl = this.fb.control(false);
  form = this.fb.group({
    switch: this.switchControl
  });

  @HostBinding('attr.data-size')
  _size: Size = Size.normal;

  _align: FlexAlign = FlexAlign.center;

  @HostBinding('attr.data-focused')
  focused = false;

  get checked() {
    return this.switchControl.value;
  }

  @PropertyApi({
    description: 'Label for switch',
    type: 'string'
  })
  @Input()
  label: string;

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
    description: 'Switch size',
    path: 'ui.size',
    default: Size.normal,
    options: [Size.tiny, Size.small, Size.normal, Size.large]
  })
  @Input()
  set size(size: Size) {
    this._size = size || Size.normal;
  }

  @PropertyApi({
    description: 'Align by vertical for switch',
    path: 'ui.align',
    options: [
      FlexAlign.center,
      FlexAlign.start,
      FlexAlign.end
    ],
    default: FlexAlign.center
  })
  @Input()
  set align(align: FlexAlign) {
    this._align = align || FlexAlign.center;
  }

  get align() {
    return this._align;
  }

  @PropertyApi({
    description: 'Value for checkbox',
    type: 'any'
  })
  @Input()
  value: any;

  @ContentApi({
    selector: '#switchLabelTemplate',
    description: 'Switch label template'
  })
  @ContentChild('switchLabelTemplate')
  labelTemplate: TemplateRef<any>;

  get onIcon() {
    return this.icons?.on || this.config.switch.icons.on;
  }

  get offIcon() {
    return this.icons?.off || this.config.switch.icons.off;
  }

  onChange: (value: any) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(public config: JunteUIConfig,
              private logger: NGXLogger,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.switchControl.valueChanges
      .subscribe(value => this.onChange(value));
  }

  writeValue(value) {
    this.switchControl.setValue(value, {emitEvent: false});
  }

  setDisabledState(disabled: boolean) {
    disabled ? this.switchControl.disable({emitEvent: false}) : this.switchControl.enable({emitEvent: false});
  }

}
