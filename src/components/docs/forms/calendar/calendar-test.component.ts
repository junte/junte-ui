import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CalendarComponent, Period, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

export enum Months {
  march = 2,
  may = 4,
  july = 6,
  april = 3
}

@Component({
  selector: 'app-calendar-test',
  templateUrl: './calendar-test.component.html',
  styleUrls: ['./calendar-test.component.scss']
})
export class CalendarTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  month = Months;
  types = {calendar: CalendarComponent};

  @ViewChild('code') code: TabComponent;

  period: Period;

  yearControl = this.fb.control(null);
  monthControl = this.fb.control(null);
  metricsControl = this.fb.control(false);
  customDayControl = this.fb.control(false);

  builder = this.fb.group({
    year: this.yearControl,
    month: this.monthControl,
    metrics: this.metricsControl,
    customDay: this.customDayControl,
  });

  flightDateControl = this.fb.control(new Date());

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
