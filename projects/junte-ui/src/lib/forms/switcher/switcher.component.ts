import { Component, ContentChildren, EventEmitter, forwardRef, HostBinding, HostListener, Input, Output, QueryList } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { PropertyApi } from '../../core/decorators/api';
import { Feature } from '../../core/enums/feature';
import { Orientation } from '../../core/enums/orientation';
import { UI } from '../../core/enums/ui';
import { Width } from '../../core/enums/width';
import { LOGGER_PROVIDERS } from '../../core/logger/providers';
import { isEqual } from '../../core/utils/equal';
import { BreakpointService } from '../../layout/responsive/breakpoint.service';
import { DeviceService } from '../../layout/responsive/device.service';
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
    },
    ...LOGGER_PROVIDERS
  ]
})
export class SwitcherComponent implements ControlValueAccessor {

  @HostBinding('attr.host')
  readonly host = 'jnt-switcher-host';

  ui = UI;

  private _features: Feature[] = [];
  private _orientation: Orientation = Orientation.horizontal;

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
    return this._orientation;
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
    description: 'Switcher mode',
    path: 'ui.select.mode',
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
    description: 'Add badge with the number of selected items; Select all item in switcher; Allow empty value in switcher; Adapted on mobile; Display marks',
    path: 'ui.feature',
    default: '[ui.feature.adapted]',
    options: [Feature.badge, Feature.selectAll, Feature.allowEmpty, Feature.adapted, Feature.marks]
  })
  @Input()
  set features(features: Feature[]) {
    this._features = features || [];
  }

  get features() {
    return this._features;
  }

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

  @PropertyApi({
    description: 'Selected value',
    type: '(selected)='
  })
  @Output('selected')
  updated = new EventEmitter<any>();

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
              public breakpoint: BreakpointService,
              public device: DeviceService) {
  }

  writeValue(value: any | any[]) {
    if (this.mode === SelectMode.multiple && !value) {
      throw new Error('Wrong value form multiple select mode');
    }

    this.selected = (this.mode === SelectMode.single
      ? ((value ?? null) !== null ? [value] : []) : value) as Key[];
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
          if (same && !this.features.includes(Feature.allowEmpty)) {
            return;
          }

          this.selected = same || value === null ? [] : [value];
          this.onChange(same ? null : value);
          this.updated.emit(same ? null : value);
        } else {
          this.selected = value === null ? [] : [value];
          this.onChange(value);
          this.updated.emit(value);
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
        this.updated.emit(this.selected);
        break;
    }
  }

  selectAll() {
    this.options.forEach(o => this.selected.push(o.value));
    this.version++;
    this.onChange(this.selected);
    this.updated.emit(this.selected);
  }
}
