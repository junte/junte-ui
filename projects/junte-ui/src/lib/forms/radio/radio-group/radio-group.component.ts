import {
  AfterViewInit,
  Component,
  ContentChildren,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  QueryList,
  ViewChildren
} from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { Size } from '../../../core/enums/size';
import { UI } from '../../../core/enums/ui';
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

  private _size = Size.normal;

  ui = UI;
  selected: any;
  math = Math;

  radiosControl = this.fb.array([]);
  form = this.fb.group({
    radios: this.radiosControl
  });

  @HostBinding('attr.host') readonly host = 'jnt-radio-group-host';

  @Input() cols = 1;

  @Input() labelField: string;
  @Input() valueField: string;

  @Input()
  set size(size: Size) {
    this._size = size || Size.normal;
  }

  get size() {
    return this._size;
  }

  @ViewChildren(RadioComponent)
  items: QueryList<RadioComponent>;

  @ContentChildren(RadioComponent, {descendants: true})
  radios: QueryList<RadioComponent>;

  onChange: (value: any) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(private fb: FormBuilder,
              private logger: NGXLogger) {
  }

  ngAfterViewInit() {
    this.radios.changes.subscribe(() => this.update());
    this.transformationRadio();
  }

  private transformationRadio() {
    this.radios.forEach(item => {
      if (typeof item.value === 'object') {
        item.label = item.value[this.labelField];
        item.value = item.value[this.valueField];
      }
    });
    this.update();
  }

  update() {
    if (!!this.radios) {
      this.radiosControl.reset();
      this.radios.forEach((radio, i) => {
        if (this.radiosControl.length < i + 1) {
          this.radiosControl.push(new FormControl(this.selected === radio.value));
        } else {
          this.radiosControl.get(i.toString()).setValue(this.selected === radio.value, {emitEvent: false});
        }
      });
    }
  }

  writeValue(value: any) {
    this.selected = value || null;
    this.update();
  }

  setDisabledState(isDisabled: boolean) {
    isDisabled ? this.radiosControl.disable() : this.radiosControl.enable();
  }

  select(value) {
    this.selected = value || null;
    this.radiosControl.setValue(this.items.map(item => item.value === this.selected), {emitEvent: false});
    this.onChange(this.selected);
  }
}
