import { Component, forwardRef, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'jnt-page-size',
  templateUrl: './page-size.encapsulated.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PageSizeComponent),
    multi: true
  }]
})
export class PageSizeComponent {

  @HostBinding('attr.host') readonly host = 'jnt-page-size-host';

  private _pageSize = 10;

  set pageSize(size: number) {
    this._pageSize = size;
    this.onChange(size);
  }

  get pageSize() {
    return this._pageSize;
  }

  constructor() {
  }

  onChange(val: number) {
  }

  onTouched() {
  }

  writeValue(value: number): void {
    this.pageSize = value;
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

}
