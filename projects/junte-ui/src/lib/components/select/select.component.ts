import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'jnt-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {

  @Input() options: any[] = [];
  @Input() labelField: string;
  @Input() valueField: string;
  @Input() multiple = false;

  selectedOption: any;
  selectedOptions: any[] = [];

  constructor() {
  }

  optionSelect(option: any) {
    this.writeValue(option[this.valueField]);
  }

  writeValue(value) {
    if (!value) {
      return;
    }

    const selected = this.options.find(el => el[this.valueField] === value);
    if (selected) {
      this.selectedOption = selected;
      this.onChange(this.selectedOption[this.valueField]);
    }
  }

  onChange: any = () => {
  };

  onTouched: any = () => {
  };

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }
}
