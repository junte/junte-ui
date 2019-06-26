import { AfterContentInit, Component, ContentChildren, forwardRef, HostBinding, OnDestroy, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, merge, Subscription } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { isArray } from 'util';
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

export class CheckboxGroupComponent implements AfterContentInit, OnDestroy {

  @HostBinding('attr.host') readonly host = 'jnt-checkbox-group-host';

  @ContentChildren(CheckboxComponent, {descendants: true}) listCheckboxComponent: QueryList<CheckboxComponent>;

  private subscribe: Subscription;
  private _selectedItems: any[];

  set selectedItems(value: any) {
    this._selectedItems = value;

    this.updateSelected();
    this.onChange(value);
  }

  get selectedItems() {
    return this._selectedItems;
  }

  ngAfterContentInit() {
    const changes$ = this.listCheckboxComponent.map(checkbox =>
      fromEvent(checkbox.getElement(), 'click').pipe(mapTo(checkbox)));

    this.subscribe = merge(...changes$).subscribe((ckeckbox: CheckboxComponent) =>
      this.select(ckeckbox.value));
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  private updateSelected() {
    this.listCheckboxComponent.forEach(r => r.checked = this.selectedItems.includes(r.value));
  }

  select(value) {
    const index = this.selectedItems.findIndex(i => i === value);
    if (index > -1) {
      this.selectedItems.splice(index, 1);
    } else {
      this.selectedItems.push(value);
    }

    this.onChange(this.selectedItems);
  }

  writeValue(value: any) {
    if (!!value) {
      this.selectedItems = isArray(value) ? value : [value];
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
