import { AfterViewInit, Component, ContentChildren, forwardRef, HostBinding, Input, QueryList, ViewChildren } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { UI } from '../../../../enums/ui';
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

export class RadioGroupComponent implements AfterViewInit {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-radio-group-host';

  @ViewChildren(RadioComponent)
  items: QueryList<RadioComponent>;

  @ContentChildren(RadioComponent, {descendants: true})
  radios: QueryList<RadioComponent>;

  @Input() labelField: string;
  @Input() valueField: string;

  private selected$ = new BehaviorSubject<any>(undefined);

  set selected(value: any) {
    this.selected$.next(value);
  }

  get selected() {
    return this.selected$.getValue();
  }

  ngAfterViewInit() {
    this.transformationRadio();

    this.selected$.pipe(filter(v => v !== undefined))
      .subscribe(value => {
        this.onChange(value);
        this.updateSelected();
      });
  }

  private transformationRadio() {
    this.radios.forEach(item => {
      if (typeof item.value === 'object') {
        item.label = item.value[this.labelField];
        item.value = item.value[this.valueField];
      }
    });
    this.updateSelected();
  }

  private updateSelected() {
    this.items.forEach(item => item.checked = item.value === this.selected);
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
