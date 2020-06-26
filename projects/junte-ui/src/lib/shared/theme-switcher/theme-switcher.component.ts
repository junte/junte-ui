import { Component, forwardRef, HostBinding, HostListener, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Theme } from '../../core/enums/theme';
import { UI } from '../../core/enums/ui';

@Component({
  selector: 'jnt-theme-switcher',
  templateUrl: './theme-switcher.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ThemeSwitcherComponent),
      multi: true
    }
  ]
})
export class ThemeSwitcherComponent implements OnInit, ControlValueAccessor {

  @HostBinding('attr.host') readonly host = 'jnt-theme-switcher-host';

  @HostBinding('attr.theme') theme = Theme.light;

  ui = UI;
  themeControl = new FormControl();
  switcher = this.fb.group({
    theme: this.themeControl
  });

  onChange: (value: any) => {};
  onTouched: () => {};
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.themeControl.valueChanges.subscribe(checked => {
      this.theme = checked ? Theme.light : Theme.dark;
      this.onChange(this.theme);
    });
  }

  writeValue(value) {
    this.themeControl.setValue(!value || value === Theme.light, {emitEvent: false});
  }
}
