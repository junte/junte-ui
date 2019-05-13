import {
  AfterContentInit,
  Component,
  ContentChildren,
  forwardRef,
  HostBinding,
  OnDestroy,
  QueryList
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioComponent } from '../radio.component';
import { fromEvent, merge, Subscription } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'jnt-radio-group',
  templateUrl: './radio-group.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true
    }
  ]
})

export class RadioGroupComponent implements AfterContentInit, OnDestroy {

  @HostBinding('attr.host') readonly host = 'jnt-radio-group-host';

  @ContentChildren(RadioComponent, {descendants: true}) listRadioComponent: QueryList<RadioComponent>;

  private subscribe: Subscription;
  private _selected: any;

  set selected(value: any) {
    this._selected = value;

    this.updateSelected();
    this.onChange(value);
  }

  get selected() {
    return this._selected;
  }

  ngAfterContentInit() {
    const changes$ = this.listRadioComponent.map(radio =>
      fromEvent(radio.getElement(), 'click').pipe(mapTo(radio)));

    this.subscribe = merge(...changes$).subscribe((radio: RadioComponent) =>
      this.selected = radio.value);
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  private updateSelected() {
    this.listRadioComponent.forEach(r => r.checked = r.value === this.selected);
  }

  writeValue(value: any) {
    if (!!value) {
      this.selected = value;
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
