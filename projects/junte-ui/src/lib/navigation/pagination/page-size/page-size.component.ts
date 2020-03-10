import { Component, forwardRef, HostBinding, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UI } from '../../../core/enums/ui';

const DEFAULT_SIZE = 10;

export class PageSizeOption {
  constructor(public value: number, public label: string) {
  }
}

@Component({
  selector: 'jnt-page-size',
  templateUrl: './page-size.encapsulated.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PageSizeComponent),
    multi: true
  }]
})
export class PageSizeComponent implements OnInit {

  ui = UI;

  selectControl = new FormControl(DEFAULT_SIZE);
  form = this.fb.group({
    select: this.selectControl
  });

  @HostBinding('attr.host')
  readonly host = 'jnt-page-size-host';

  @Input() options: PageSizeOption[] = [
    new PageSizeOption(10, '10'),
    new PageSizeOption(20, '20'),
    new PageSizeOption(30, '30'),
    new PageSizeOption(50, '50'),
    new PageSizeOption(100, '100')
  ];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.selectControl.valueChanges
      .subscribe(value => this.onChange(value));
  }

  onChange(val: number) {
  }

  onTouched() {
  }

  writeValue(value: number): void {
    this.selectControl.patchValue(value);
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

}
