import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { getDate, format } from 'date-fns';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
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
