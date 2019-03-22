import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { getDate, format } from 'date-fns';

@Component({
  selector: 'app-calendar-test',
  templateUrl: './calendar-test.component.html',
  styleUrls: ['./calendar-test.component.scss']
})
export class CalendarTestComponent implements OnInit {
  getDate = getDate;
  format = format;
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

  ngOnInit() {
  }

}
