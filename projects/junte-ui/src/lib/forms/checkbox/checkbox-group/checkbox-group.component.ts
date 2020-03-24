import { AfterViewInit, Component, ContentChildren, forwardRef, HostBinding, Input, QueryList, ViewChildren } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Size } from '../../../core/enums/size';
import { UI } from '../../../core/enums/ui';
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

export class CheckboxGroupComponent implements AfterViewInit, ControlValueAccessor {

  private disabled = false;
  private selectedItems: any[];

  _size: Size = Size.normal;

  ui = UI;

  @HostBinding('attr.host')
  readonly host = 'jnt-checkbox-group-host';

  @ViewChildren(CheckboxComponent)
  items: QueryList<CheckboxComponent>;

  @ContentChildren(CheckboxComponent, {descendants: true})
  checkboxes: QueryList<CheckboxComponent>;

  @Input()
  set size(size: Size) {
    this._size = size || Size.normal;
  }

  get size() {
    return this._size;
  }

  ngAfterViewInit() {
    this.updateChecked();
    this.updateDisabled();
  }

  private updateChecked() {
    if (!!this.items) {
      this.items.forEach(item => item.checked = this.selectedItems.includes(item.value));
    }
  }

  private updateDisabled() {
    if (!!this.items) {
      this.items.forEach(item => item.disabled = this.disabled);
    }
  }

  select(value) {
    const index = this.selectedItems.findIndex(item => item === value);
    if (index > -1) {
      this.selectedItems.splice(index, 1);
    } else {
      this.selectedItems.push(value);
    }
    this.onChange(this.selectedItems);
  }

  writeValue(value: any) {
    if (!!value) {
      this.selectedItems = Array.isArray(value) ? value : [value];
    } else {
      this.selectedItems = [];
    }
    this.updateChecked();
  }

  onChange(value: any) {
  }

  onTouched() {
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    this.updateDisabled();
  }
}
