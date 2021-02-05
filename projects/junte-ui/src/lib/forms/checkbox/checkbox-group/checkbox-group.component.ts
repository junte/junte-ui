import {
  AfterViewInit,
  Component,
  ContentChildren,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  QueryList
} from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { PropertyApi } from '../../../core/decorators/api';
import { Breakpoint } from '../../../core/enums/breakpoint';
import { Feature } from '../../../core/enums/feature';
import { FlexAlign } from '../../../core/enums/flex';
import { Gutter } from '../../../core/enums/gutter';
import { Orientation } from '../../../core/enums/orientation';
import { Size } from '../../../core/enums/size';
import { UI } from '../../../core/enums/ui';
import { LOGGER_PROVIDERS } from '../../../core/logger/providers';
import { BreakpointService } from '../../../layout/responsive/breakpoint.service';
import { CheckboxComponent } from '../checkbox.component';

@Component({
  selector: 'jnt-checkbox-group',
  templateUrl: './checkbox-group.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxGroupComponent),
      multi: true
    },
    ...LOGGER_PROVIDERS
  ]
})

export class CheckboxGroupComponent implements ControlValueAccessor, AfterViewInit {

  ui = UI;

  @HostBinding('attr.host')
  readonly host = 'jnt-checkbox-group-host';

  private _orientation: Orientation = Orientation.vertical;
  private _spacing: Gutter = Gutter.small;
  private _align: FlexAlign = FlexAlign.start;
  private _size: Size = Size.normal;
  private selectedItems = [];

  checkboxesControl = this.fb.array([]);
  form = this.fb.group({
    checkboxes: this.checkboxesControl
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
    description: 'Align in radio group',
    path: 'ui.align'
  })
  @Input()
  set align(align: FlexAlign) {
    this._align = align || FlexAlign.start;
  }

  get align() {
    return this._align;
  }

  @PropertyApi({
    description: 'Count of cols in checkbox group',
    type: 'number',
    default: 1
  })
  @Input()
  cols = 1;

  @PropertyApi({
    description: 'Size for checkbox in checkbox group',
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

  @ContentChildren(CheckboxComponent)
  checkboxes: QueryList<CheckboxComponent>;

  onChange: (value: any) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(private fb: FormBuilder,
              private breakpoint: BreakpointService,
              private logger: NGXLogger) {
  }

  ngAfterViewInit() {
    this.update();
    this.checkboxes.changes.subscribe(() => this.update());
  }

  update() {
    if (!!this.checkboxes) {
      this.checkboxesControl.reset([], {emitEvent: false});
      this.checkboxes.forEach((checkbox, i) => {
        let control = this.checkboxesControl.get(i.toString());
        if (!!control) {
          control.setValue(this.selectedItems.includes(checkbox.value), {emitEvent: false});
        } else {
          control = new FormControl(this.selectedItems.includes(checkbox.value));
          this.checkboxesControl.controls.push(control);
          const index = this.checkboxesControl.length - 1;
          control.valueChanges.subscribe(value => {
            const checkbox = this.checkboxes.toArray()[index].value;
            if (value) {
              this.selectedItems.push(checkbox);
            } else {
              this.selectedItems.splice(this.selectedItems.indexOf(checkbox), 1);
            }
            this.onChange(this.selectedItems);
          });
        }
      });
    }
  }

  writeValue(value: any) {
    let selectedItems = [];
    if (!!value) {
      selectedItems = Array.isArray(value) ? value : [value];
    }
    this.selectedItems = selectedItems;
    this.update();
  }

  setDisabledState(isDisabled: boolean) {
    isDisabled ? this.checkboxesControl.disable({emitEvent: false})
      : this.checkboxesControl.enable({emitEvent: false});
  }
}
