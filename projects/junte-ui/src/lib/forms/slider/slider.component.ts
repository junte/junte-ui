import { Component, forwardRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { map } from 'rxjs/operators';
import { PropertyApi } from '../../core/decorators/api';
import { Size } from '../../core/enums/size';
import { UI } from '../../core/enums/ui';

const DEFAULT_MIN = 0;
const DEFAULT_MAX = 100;
const DEFAULT_STEP = 1;

@Component({
  selector: 'jnt-slider',
  templateUrl: './slider.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SliderComponent),
      multi: true
    }
  ]
})
export class SliderComponent implements OnInit, ControlValueAccessor {

  ui = UI;

  private _min = DEFAULT_MIN;
  private _max = DEFAULT_MAX;
  private _step = DEFAULT_STEP;

  rangeControl = this.fb.control(null);
  form = this.fb.group({
    range: this.rangeControl,
  });

  @HostBinding('attr.host')
  readonly host = 'jnt-slider-host';

  @HostBinding('attr.data-size')
  _size: Size = Size.normal;

  @HostBinding('attr.data-disabled')
  disabled = false;

  @PropertyApi({
    description: 'Slider min',
    type: 'number',
    default: DEFAULT_MIN
  })
  @Input() set min(min: number) {
    this._min = min || DEFAULT_MIN;
  }

  get min() {
    return this._min;
  }

  @PropertyApi({
    description: 'Slider max',
    type: 'number',
    default: DEFAULT_MAX
  })
  @Input() set max(max: number) {
    this._max = max || DEFAULT_MAX;
  }

  get max() {
    return this._max;
  }

  @PropertyApi({
    description: 'Slider step',
    type: 'number',
    default: DEFAULT_STEP
  })
  @Input() set step(step: number) {
    this._step = step || DEFAULT_STEP;
  }

  get step() {
    return this._step;
  }

  onChange: (value: any) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(private logger: NGXLogger,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.rangeControl.valueChanges.pipe(map(value => +value))
      .subscribe(value => {
        if (value > this.max || value < this.min) {
          value = Math.min(Math.max(value, this.min), this.max);
          this.rangeControl.setValue(value, {emitEvent: false});
        }
        this.onChange(value);
      });
  }

  writeValue(value: number) {
    this.rangeControl.setValue(value || DEFAULT_MIN, {emitEvent: false});
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
