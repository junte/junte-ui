import { AfterContentInit, Component, ContentChildren, forwardRef, HostBinding, Input, OnDestroy, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, fromEvent, merge, Subscription } from 'rxjs';
import { filter, mapTo } from 'rxjs/operators';
import { isObject, isUndefined } from 'util';
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

export class RadioGroupComponent implements AfterContentInit, OnDestroy {

  @HostBinding('attr.host') readonly host = 'jnt-radio-group-host';

  @ContentChildren(RadioComponent, {descendants: true}) listRadioComponent: QueryList<RadioComponent>;

  @Input() labelField: string;
  @Input() valueField: string;

  private subscribe: Subscription;
  private selected$: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

  set selected(value: any) {
    this.selected$.next(value);
  }

  get selected() {
    return this.selected$.getValue();
  }

  constructor() {
  }

  ngAfterContentInit() {
    setTimeout(() => this.transformationRadio());

    const changes$ = this.listRadioComponent.map(radio =>
      fromEvent(radio.getElement(), 'click').pipe(mapTo(radio)));

    this.subscribe = merge(...changes$).subscribe((radio: RadioComponent) =>
      this.selected = radio.value);

    this.selected$.pipe(filter(v => !isUndefined(v)))
      .subscribe(value => {
        this.onChange(value);
        this.updateSelected();
      });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  private transformationRadio() {
    this.listRadioComponent.forEach(r => {
      if (isObject(r.value)) {
        r.label = r.value[this.labelField];
        r.value = r.value[this.valueField];
      }
    });
    this.updateSelected();
  }

  private updateSelected() {
    this.listRadioComponent.forEach(r =>
      r.checked = r.value === this.selected);
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
