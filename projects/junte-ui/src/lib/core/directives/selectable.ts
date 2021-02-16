import { CommonModule } from '@angular/common';
import { Directive, EventEmitter, forwardRef, HostBinding, HostListener, Input, NgModule, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { PropertyApi } from '../decorators/api';
import { Feature } from '../enums/feature';
import { UI } from '../enums/ui';
import { LOGGER_PROVIDERS } from '../logger/providers';

enum SelectMode {
  single = 'single',
  multiple = 'multiple'
}

function isEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

class Config {
  mode: SelectMode;
  value: any;
  enabled: true;
  features: Feature[];
  group: string;

  constructor(defs: any = null) {
    if (!!defs) {
      Object.assign(this, defs);
    }
  }
}

export class SelectableHub {

  groups: { [key: string]: EventEmitter<any> } = {};

  bind(key: string): EventEmitter<any> {
    if (!this.groups[key]) {
      this.groups[key] = new EventEmitter<any>();
    }
    return this.groups[key];
  }

  emit(key: string, state: any) {
    console.log(key);
    this.bind(key).emit(state);
  }

}

const SELECTABLE_HUB = new SelectableHub();

export function eventEmitterFactory(): SelectableHub {
  return SELECTABLE_HUB;
}

@Directive({
  selector: '[jntSelectable]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectableDirective),
      multi: true
    },
    ...LOGGER_PROVIDERS
  ]
})
export class SelectableDirective implements OnInit, ControlValueAccessor {

  config: Config = new Config({
    mode: SelectMode.single,
    enabled: true,
    features: [],
    group: 'default'
  });

  @HostBinding('attr.data-disabled')
  disabled = false;

  @HostBinding('attr.data-selected')
  get selected() {
    const {value} = this.config;
    return this.state.findIndex(e => isEqual(e, value)) !== -1;
  }

  @HostBinding('attr.data-mode')
  _mode: SelectMode = SelectMode.single;

  @PropertyApi({
    description: 'Selectable configuration',
    type: '{mode?: SelectMode, value: any, enabled?: boolean, features?: Feature[]}',
    default: '{}'
  })
  @Input('jntSelectable')
  set configure(config: Partial<Config>) {
    Object.assign(this.config, config);
  }

  state: any[];

  onChange: (value: any) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(private hub: SelectableHub,
              private logger: NGXLogger) {
  }

  ngOnInit() {
    this.hub.bind(this.config.group)
      .subscribe(state => this.state = state);
  }

  writeValue(value: any | any[]) {
    this.state = !!value ? Array.isArray(value) ? value : [value] : [];
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  @HostListener('click')
  select() {
    const {mode, value, enabled, features} = this.config;
    if (!enabled) {
      return;
    }

    switch (mode) {
      case SelectMode.single:
        const current = this.state.length > 0 ? this.state[0] : null;
        if (!!current) {
          const same = isEqual(current, value);
          if (same && !features.includes(UI.feature.allowEmpty)) {
            return;
          }
          this.state = same ? [] : [value];
          this.onChange(same ? null : value);
        } else {
          this.state = [value];
          this.onChange(value);
        }
        break;
      case SelectMode.multiple:
        const index = this.state.findIndex(e => isEqual(e, value));
        if (index !== -1) {
          this.state.splice(index, 1);
        } else {
          this.state.push(value);
        }
        this.onChange(this.state);
        break;
    }
    this.hub.emit(this.config.group, this.state);
  }

}

@NgModule({
  declarations: [
    SelectableDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: SelectableHub,
      useFactory: eventEmitterFactory
    }
  ],
  exports: [
    SelectableDirective
  ]
})
export class SelectableModule {

}
