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
  types = {flightDate: DatePickerComponent};

  @ViewChild('code') code: TabComponent;

  formatControl = this.fb.control(this.dateFormat.fullDate);

  builder = this.fb.group({
    format: this.formatControl,
  });

  flightDateControl = this.fb.control(new Date);
  form = this.fb.group({
    flightDate: this.flightDateControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
