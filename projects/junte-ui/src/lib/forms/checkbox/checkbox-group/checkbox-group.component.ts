import { AfterViewInit, Component, ContentChildren, forwardRef, HostBinding, QueryList, ViewChildren } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
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

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-checkbox-group-host';

  @ViewChildren(CheckboxComponent)
  items: QueryList<CheckboxComponent>;

  @ContentChildren(CheckboxComponent, {descendants: true})
  checkboxes: QueryList<CheckboxComponent>;

  private _selectedItems: any[];

  set selectedItems(value: any) {
    this._selectedItems = value;
  }

  get selectedItems() {
    return this._selectedItems;
  }

  ngAfterViewInit() {
    this.updateItems();
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

  updateItems() {
    if (!!this.items) {
      this.items.forEach(item => item.checked = this.selectedItems.includes(item.value));
    }
  }

  writeValue(value: any) {
    if (!!value) {
      this.selectedItems = Array.isArray(value) ? value : [value];
    } else {
      this.selectedItems = [];
    }
    this.updateItems();
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
    this.items.forEach(item => item.disabled = isDisabled);
  }
}
