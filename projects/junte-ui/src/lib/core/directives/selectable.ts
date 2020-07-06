import { CommonModule } from '@angular/common';
import {
  Directive,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  Inject,
  InjectionToken,
  Input,
  NgModule,
  OnInit
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PropertyApi } from '../decorators/api';

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
  allowEmpty: boolean;

  constructor(defs: any = null) {
    if (!!defs) {
      Object.assign(this, defs);
    }
  }
}

const SELECTABLE_SIGNALS = new InjectionToken('selectable_signals');

const hub = new EventEmitter();

console.log('xx7');

export function eventEmitterFactory() {
  return hub;
}

@Directive({
  selector: '[jntSelectable]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectableDirective),
      multi: true
    },
    {
      provide: SELECTABLE_SIGNALS,
      useFactory: eventEmitterFactory
    }]
})
export class SelectableDirective implements OnInit {

  config: Config = new Config({
    mode: SelectMode.single,
    enabled: true,
    allowEmpty: true
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
    type: '{mode?: SelectMode, value: any, enabled?: boolean, allowEmpty?: boolean}',
    default: '{}'
  })
  @Input('jntSelectable')
  set configure(config: {
    mode?: SelectMode,
    value: any,
    enabled?: boolean,
    allowEmpty?: boolean
  }) {
    Object.assign(this.config, config);
  }

  state: any[];

  constructor(@Inject(SELECTABLE_SIGNALS) private signals: EventEmitter<any>) {

  }

  ngOnInit() {
    this.signals.subscribe(state => this.state = state);
  }

  onChange: Function = () => {
  };

  onTouched: Function = () => {
  };

  writeValue(value: any | any[]) {
    this.state = !!value ? Array.isArray(value) ? value : [value] : [];
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  @HostListener('click')
  select() {
    const {mode, value, enabled, allowEmpty} = this.config;
    if (!enabled) {
      return;
    }

    switch (mode) {
      case SelectMode.single:
        const current = this.state.length > 0 ? this.state[0] : null;
        if (!!current) {
          const same = isEqual(current, value);
          if (same && !allowEmpty) {
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
    this.signals.emit(this.state);
  }

}

@NgModule({
  declarations: [
    SelectableDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SelectableDirective
  ]
})
export class SelectableModule {
}
