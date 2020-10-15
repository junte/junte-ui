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
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { map } from 'rxjs/operators';
import { PropertyApi } from '../../../core/decorators/api';
import { Orientation } from '../../../core/enums/orientation';
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

  ui = UI;

  @HostBinding('attr.host')
  readonly host = 'jnt-radio-group-host';

  @HostBinding('attr.data-orientation')
  _orientation = Orientation.vertical;

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
    return this._orientation;
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
    this.update();
    this.radiosControl.valueChanges.pipe(
      map(radios => this.items
        .filter((_, i) => radios[i])
        .map(radio => radio.value))
    ).subscribe(radios => {
      for (const radio of radios) {
        if (radio !== this.selected) {
          this.selected = radio;
          break;
        }
      }
      this.radiosControl.setValue(this.items.map(item => item.value === this.selected), {emitEvent: false});
      this.onChange(this.selected);
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
    this.selected = value || null;
    this.update();
  }

  setDisabledState(isDisabled: boolean) {
    isDisabled ? this.radiosControl.disable({emitEvent: false})
      : this.radiosControl.enable({emitEvent: false});
  }
}
