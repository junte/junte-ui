import { AfterContentInit, Component, ContentChildren, forwardRef, HostBinding, OnDestroy, QueryList } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, merge, Subscription } from 'rxjs';
import { mapTo } from 'rxjs/operators';
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

export class CheckboxGroupComponent implements AfterContentInit, OnDestroy, ControlValueAccessor {

  @HostBinding('attr.host') readonly host = 'jnt-checkbox-group-host';

  @ContentChildren(CheckboxComponent, {descendants: true}) listCheckboxComponent: QueryList<CheckboxComponent>;

  private subscribe: Subscription;
  private _selectedItems: any[];

  set selectedItems(value: any) {
    this._selectedItems = value;
    this.updateSelected();
  }

  get selectedItems() {
    return this._selectedItems;
  }

  ngAfterContentInit() {
    const changes$ = this.listCheckboxComponent.map(checkbox =>
      fromEvent(checkbox.element.nativeElement, 'click').pipe(mapTo(checkbox)));

    this.subscribe = merge(...changes$)
      .subscribe((checkbox: CheckboxComponent) => this.select(checkbox.value));

    this.updateSelected();
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  private updateSelected() {
    if (!!this.listCheckboxComponent) {
      this.listCheckboxComponent.forEach(checkbox =>
        checkbox.checked = this.selectedItems.includes(checkbox.value));
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
    }
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
}
