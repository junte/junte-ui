import { Component, ContentChildren, forwardRef, HostBinding, HostListener, Input, QueryList } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { PropertyApi } from '../../core/decorators/api';
import { Breakpoint } from '../../core/enums/breakpoint';
import { Feature } from '../../core/enums/feature';
import { Orientation } from '../../core/enums/orientation';
import { UI } from '../../core/enums/ui';
import { Width } from '../../core/enums/width';
import { isEqual } from '../../core/utils/equal';
import { BreakpointService } from '../../layout/responsive/breakpoint.service';
import { SelectMode } from '../select/enums';
import { Key } from '../select/model';
import { SwitcherOptionComponent } from './switcher-option.component';

@Component({
  selector: 'jnt-switcher',
  templateUrl: './switcher.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitcherComponent),
      multi: true
    }
  ]
})
export class SwitcherComponent implements ControlValueAccessor {

  @HostBinding('attr.host') readonly host = 'jnt-switcher-host';

  ui = UI;
  selectMode = SelectMode;
  feature = Feature;

  _orientation: Orientation = Orientation.horizontal;

  @HostBinding('attr.data-width')
  _width: Width = Width.default;

  @PropertyApi({
    description: 'Switcher orientation ',
    path: 'ui.orientation',
    default: Orientation.horizontal,
    options: [Orientation.horizontal, Orientation.vertical]
  })
  @HostBinding('attr.data-orientation')
  @Input() set orientation(type: Orientation) {
    this._orientation = type || Orientation.horizontal;
  }

  get orientation() {
    return this.breakpoint.current === Breakpoint.mobile ? Orientation.vertical : this._orientation;
  }

  @PropertyApi({
    description: 'Set disabled state',
    type: 'boolean',
    default: 'false',
  })
  @HostBinding('attr.data-disabled')
  @Input()
  disabled = false;

  @PropertyApi({
    description: 'Select key field',
    type: 'string',
    default: 'key'
  })
  @Input() keyField: string;

  @HostBinding('attr.data-mode')
  _mode: SelectMode = SelectMode.single;

  @PropertyApi({
    description: 'Select mode',
    path: 'ui.select',
    default: SelectMode.single,
    options: [SelectMode.single, SelectMode.multiple]
  })
  @Input() set mode(mode: SelectMode) {
    this._mode = mode || SelectMode.single;
  }

  get mode() {
    return this._mode;
  }

  @PropertyApi({
    description: 'Select allow empty',
    type: 'boolean',
    default: 'true'
  })
  @HostBinding('attr.data-allow-empty')
  @Input() allowEmpty = true;

  @PropertyApi({
    description: 'Add badge with the number of selected items; Select all item in switcher',
    path: 'ui.feature',
    options: [Feature.badge, Feature.selectAll]
  })
  @HostBinding('attr.data-features')
  @Input()
  features: Feature[] = [];

  @PropertyApi({
    description: 'Display marks',
    type: 'boolean',
    default: 'true'
  })
  @HostBinding('attr.data-allow-empty')
  @Input() marks = false;

  @PropertyApi({
    description: 'Display skeleton',
    type: 'count: number',
  })
  @Input()
  capacity = 3;

  @PropertyApi({
    description: 'Loading',
    type: 'boolean',
    default: 'false',
  })
  @Input()
  loading = false;

  @PropertyApi({
    description: 'Input width',
    path: 'ui.width',
    default: Width.default,
    options: [Width.default, Width.fluid]
  })
  @Input() set width(width: Width) {
    this._width = width || Width.default;
  }

  @ContentChildren(SwitcherOptionComponent)
  options: QueryList<SwitcherOptionComponent>;

  selected: any[] = [];

  version = 0;

  onChange: (value: any) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(private logger: NGXLogger,
              private breakpoint: BreakpointService) {
  }

  writeValue(value: any | any[]) {
    if (this.mode === SelectMode.multiple && !value) {
      throw new Error('Wrong value form multiple select mode');
    }

    this.selected = (this.mode === SelectMode.single ? (!!value ? [value] : []) : value) as Key[];
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  select(value: any) {
    switch (this.mode) {
      case SelectMode.single:
        const current = this.selected.length > 0 ? this.selected[0] : null;
        if (current !== null) {
          const same = !!this.keyField
            ? current[this.keyField] === value[this.keyField]
            : isEqual(current, value);
          if (same && !this.allowEmpty) {
            return;
          }

          this.selected = same || value === null ? [] : [value];
          this.onChange(same ? null : value);
        } else {
          this.selected = value === null ? [] : [value];
          this.onChange(value);
        }

        this.version++;
        break;
      case SelectMode.multiple:
        const index = !!this.keyField
          ? this.selected.indexOf(value[this.keyField])
          : this.selected.findIndex(e => isEqual(e, value));
        if (index !== -1) {
          this.selected.splice(index, 1);
        } else {
          this.selected.push(value);
        }
        this.version++;
        this.onChange(this.selected);
        break;
    }
  }

  selectAll() {
    this.options.forEach(o => this.selected.push(o.value));
    this.version++;
    this.onChange(this.selected);
  }
}
