import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorPickerComponent),
      multi: true
    }
  ]
})
export class ColorPickerComponent implements OnInit, ControlValueAccessor {

  ui = UI;

  colorControl = this.fb.control(UI.color.orange);

  form = this.fb.group({
    color: this.colorControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.colorControl.valueChanges.subscribe(value => this.onChange(value));
  }

  onChange(value: string) {
  }

  onTouched() {
  }

  writeValue(value: string) {
    if (!!value) {
      this.colorControl.patchValue(value);
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

}
