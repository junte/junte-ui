import { Component, forwardRef, HostBinding, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Themes, UI } from '../../enum/ui';

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

  @HostBinding('attr.theme') theme = Themes.light;

  ui = UI;
  themes = Themes;
  themeControl = new FormControl();
  form = this.fb.group({
    theme: this.themeControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.themeControl.valueChanges.subscribe(checked => {
      this.theme = checked ? Themes.light : Themes.dark;
      this.onChange(this.theme);
    });
  }

  onChange = (val: any) => {
  };

  onTouched = () => {
  };

  writeValue(value) {
    this.themeControl.setValue(value === Themes.light);
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }
}
