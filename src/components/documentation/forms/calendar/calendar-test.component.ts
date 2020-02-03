import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TabComponent, UI } from 'junte-ui';
import { CalendarComponent } from 'junte-ui';
import { Period } from 'projects/junte-ui/src/lib/components/forms/calendar/models';
import { BehaviorSubject } from 'rxjs';
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

  private period$ = new BehaviorSubject<Period>(null);

  ui = UI;
  localUi = LocalUI;
  month = Months;
  calendar = CalendarComponent;

  @ViewChild('code', {static: false}) code: TabComponent;

  yearControl = this.fb.control(null);
  monthControl = this.fb.control(null);
  metricsControl = this.fb.control(false);
  dayControl = this.fb.control(false);

  form = this.fb.group({
    year: this.yearControl,
    month: this.monthControl,
    metrics: this.metricsControl,
    day: this.dayControl,
  });

  calendarControl = this.fb.control(null);

  calendarForm = this.fb.group({
    calendar: this.calendarControl
  });

  set period(period: Period) {
    this.period$.next(period);
  }

  get period() {
    return this.period$.getValue();
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form.valueChanges
      .subscribe(() => this.code.flash());
  }

}
