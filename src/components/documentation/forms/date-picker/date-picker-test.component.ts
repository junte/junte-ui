import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TabComponent, UI } from 'junte-ui';
import { DatePickerComponent } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

export enum DateFormat {
  fullDate = 'dd.MM.yyyy',
  shortDate = 'dd.MM',
  longDate = 'dd.MM.yy',
  fullMonth = 'dd MMMM'
}

@Component({
  selector: 'app-date-picker-test',
  templateUrl: './date-picker-test.component.html',
  styleUrls: ['./date-picker-test.component.scss']
})
export class DatePickerTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  dateFormat = DateFormat;
  picker = DatePickerComponent;

  @ViewChild('code', {static: false}) code: TabComponent;

  placeholderControl = this.fb.control(true);
  formatControl = this.fb.control(this.dateFormat.fullDate);

  form = this.fb.group({
    placeholder: this.placeholderControl,
    format: this.formatControl,
  });

  pickerControl = this.fb.control(null);

  pickerForm = this.fb.group({
    picker: this.pickerControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form.valueChanges
      .subscribe(() => this.code.flash());
  }

}
