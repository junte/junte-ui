import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { setDate, setMonth, setYear } from 'date-fns';
import { CalendarComponent, Period, TabsComponent, UI } from 'junte-ui';
import { combineLatest } from 'rxjs';
import { HANDBOOK } from 'src/consts';
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
  months = Months;
  types = {calendar: CalendarComponent};
  handbook = HANDBOOK;
  now = new Date();

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/forms/calendar';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=1824%3A3416';

  @ViewChild('tabs') tabs: TabsComponent;

  period: Period;
  month: Date;

  yearControl = this.fb.control(null);
  monthControl = this.fb.control(null);
  metricsControl = this.fb.control(false);
  customDayControl = this.fb.control(false);
  disabledControl = this.fb.control(false);

  builder = this.fb.group({
    year: this.yearControl,
    month: this.monthControl,
    metrics: this.metricsControl,
    customDay: this.customDayControl,
    disabled: this.disabledControl
  });

  flightDateControl = this.fb.control(null);
  form = this.fb.group({
    flightDate: this.flightDateControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.tabs.flash(1));

    combineLatest([this.yearControl.valueChanges, this.monthControl.valueChanges])
      .subscribe(([year, month]) => this.month = setDate(setMonth(setYear(new Date(), year), month), 1));

    this.disabledControl.valueChanges.subscribe((disabled) => {
      disabled ? this.flightDateControl.disable({emitEvent: false}) : this.flightDateControl.enable({emitEvent: false});
    });
  }

}
