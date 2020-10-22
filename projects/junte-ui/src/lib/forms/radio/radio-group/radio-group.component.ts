import { AfterViewInit, Component, ContentChildren, forwardRef, HostBinding, HostListener, Input, QueryList } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { merge } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { PropertyApi } from '../../../core/decorators/api';
import { Breakpoint } from '../../../core/enums/breakpoint';
import { Feature } from '../../../core/enums/feature';
import { Gutter } from '../../../core/enums/gutter';
import { Orientation } from '../../../core/enums/orientation';
import { Size } from '../../../core/enums/size';
import { UI } from '../../../core/enums/ui';
import { BreakpointService } from '../../../layout/responsive/breakpoint.service';
import { RadioComponent } from '../radio.component';

@Component({
  selector: 'jnt-radio-group',
  templateUrl: './radio-group.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true
    }
  ]
})

export class RadioGroupComponent implements AfterViewInit, ControlValueAccessor {

  ui = UI;

  @HostBinding('attr.host')
  readonly host = 'jnt-radio-group-host';

  _orientation: Orientation = Orientation.vertical;
  _spacing: Gutter = Gutter.small;

  private _size = Size.normal;
  selected: any;
  math = Math;

  radiosControl = this.fb.array([]);
  form = this.fb.group({
    radios: this.radiosControl
  });

  @PropertyApi({
    description: 'Defined main axis of elements align',
    path: 'ui.orientation',
    default: Orientation.vertical,
    options: [Orientation.vertical, Orientation.horizontal]
  })
  @Input()
  set orientation(orientation: Orientation) {
    this._orientation = orientation || Orientation.vertical;
  }

  get orientation() {
    return this.breakpoint.current === Breakpoint.mobile && this.features?.includes(Feature.adapted) ?
      Orientation.vertical : this._orientation;
  }

  @PropertyApi({
    description: 'Count of cols in radio group',
    type: 'number',
    default: 1
  })
  @Input()
  cols = 1;

  @PropertyApi({
    description: 'Size for radio in radio group',
    path: 'ui.size',
    options: [Size.tiny, Size.small, Size.normal, Size.large],
    default: Size.normal
  })
  @Input()
  set size(size: Size) {
    this._size = size || Size.normal;
  }

  get size() {
    return this._size;
  }

  @PropertyApi({
    description: 'Spacing between radio item',
    path: 'ui.gutter',
    options: [Gutter.tiny,
      Gutter.small,
      Gutter.normal,
      Gutter.large,
      Gutter.big,
      Gutter.huge],
    default: Gutter.normal
  })
  @Input()
  set spacing(spacing: Gutter) {
    this._spacing = spacing || Gutter.small;
  }

  get spacing() {
    return this._spacing;
  }

  @PropertyApi({
    description: 'Adapted radio group on mobile view',
    path: 'ui.feature',
    options: [Feature.adapted]
  })
  @HostBinding('attr.data-features')
  @Input()
  features: Feature[] = [];

  @ContentChildren(RadioComponent, {descendants: true})
  radios: QueryList<RadioComponent>;

  onChange: (value: any) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(private fb: FormBuilder,
              private logger: NGXLogger,
              private breakpoint: BreakpointService) {
  }

  ngAfterViewInit() {
    this.radios.changes.subscribe(() => this.update());
    this.update();
    merge(...this.radiosControl.controls.map((control, index) =>
      control.valueChanges.pipe(
        filter(value => value),
        map(() => ({control, index}))
      ))).subscribe(({control, index}) => {
      this.selected = this.radios.toArray()[index].value;
      this.onChange(this.selected);
      this.radiosControl.reset([], {emitEvent: false});
      control.setValue(true, {emitEvent: false});
    });
  }

  update() {
    if (!!this.radios) {
      this.radiosControl.reset();
      this.radios.forEach((radio, i) => {
        if (this.radiosControl.length < i + 1) {
          this.radiosControl.push(this.fb.control(this.selected === radio.value));
        } else {
          this.radiosControl.get(i.toString())
            .setValue(this.selected === radio.value, {emitEvent: false});
        }
      });
    }
  }

  writeValue(value: any) {
    this.selected = value;
    this.update();
  }

  setDisabledState(isDisabled: boolean) {
    isDisabled ? this.radiosControl.disable({emitEvent: false})
      : this.radiosControl.enable({emitEvent: false});
  }
}
