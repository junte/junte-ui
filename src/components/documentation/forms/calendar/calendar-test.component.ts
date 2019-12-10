import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { format, getDate } from 'date-fns';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-calendar-test',
  templateUrl: './calendar-test.component.html',
  styleUrls: ['./calendar-test.component.scss']
})
export class CalendarTestComponent {
  getDate = getDate;
  format = format;
  ui = UI;
  period$ = new BehaviorSubject<any>(null);

  set period(period: any) {
    this.period$.next(period);
  }

  dueDate = new FormControl(new Date());
  form = this.fb.group({
    dueDate: this.dueDate
  });

  constructor(private fb: FormBuilder) {
  }

}
