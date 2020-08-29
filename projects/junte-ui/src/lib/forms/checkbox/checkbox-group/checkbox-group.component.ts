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
import { distinctUntilChanged, map } from 'rxjs/operators';
import { PropertyApi } from '../../../core/decorators/api';
import { Size } from '../../../core/enums/size';
import { UI } from '../../../core/enums/ui';
import { isEqual } from '../../../core/utils/equal';
import { CheckboxComponent } from '../checkbox.component';

@Component({
  selector: 'jnt-checkbox-group',
  templateUrl: './checkbox-group.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxGroupComponent),
      multi: true
    }
  ]
})

export class CheckboxGroupComponent implements ControlValueAccessor, AfterViewInit {

  ui = UI;

  @HostBinding('attr.host')
  readonly host = 'jnt-checkbox-group-host';

  private _size: Size = Size.normal;
  private selectedItems = [];
  math = Math;

  checkboxesControl = this.fb.array([]);
  form = this.fb.group({
    checkboxes: this.checkboxesControl
  });

  @PropertyApi({
    description: 'Count of cols in checkbox group',
    type: 'number',
    default: 1
  })
  @Input() cols = 1;

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

  @ViewChildren(CheckboxComponent)
  items: QueryList<CheckboxComponent>;

  @ContentChildren(CheckboxComponent)
  checkboxes: QueryList<CheckboxComponent>;

  onChange: (value: any) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(private fb: FormBuilder,
              private logger: NGXLogger) {
  }

  ngAfterViewInit() {
    this.update();
    this.checkboxes.changes.subscribe(() => this.update());

    this.checkboxesControl.valueChanges.pipe(
      map(checkboxes => this.items
        .filter((_, i) => checkboxes[i])
        .map(checkbox => checkbox.value)),
      distinctUntilChanged((a, b) => isEqual(a, b))
    ).subscribe(selectedItems => {
      this.selectedItems = selectedItems;
      this.onChange(selectedItems);
    });
  }

  update() {
    if (!!this.checkboxes) {
      this.checkboxesControl.reset();
      this.checkboxes.forEach((checkbox, i) => {
        if (this.checkboxesControl.length < i + 1) {
          this.checkboxesControl.push(new FormControl(this.selectedItems.includes(checkbox.value)));
        } else {
          this.checkboxesControl.get(i.toString()).setValue(this.selectedItems.includes(checkbox.value));
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
    isDisabled ? this.checkboxesControl.disable() : this.checkboxesControl.enable();
  }
}
