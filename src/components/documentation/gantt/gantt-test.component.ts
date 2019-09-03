import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { GanttRequestStatuses, UI } from 'junte-ui';
import { REQUESTS } from './requests';

@Component({
  selector: 'app-gantt-test',
  templateUrl: './gantt-test.component.html',
  styleUrls: ['./gantt-test.component.scss']
})
export class GanttTestComponent implements OnInit {

  ui = UI;
  requests = [];
  statuses = GanttRequestStatuses;
  loading = true;
  gantt = new FormControl(new Date());
  form = this.fb.group({
    gantt: this.gantt
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.requests = REQUESTS;
      this.loading = false;
    }, 3000);
    this.gantt.valueChanges.subscribe(date => console.log('Date changed: ', date));
  }

  add() {
    this.requests.push({
      'id': 111,
      'createdAt': '2019-08-25T01:11:40+0300',
      'createdBy': {
        'id': 111,
        'login': 'Alexeev Alexey Alexeevich'
      },
      'from': '2019-08-25T07:19:56+0300',
      'to': '2020-01-01T10:05:24+0300',
      'selfExpense': true,
      'status': 'accepting'
    });
  }

  remove() {
    this.requests.splice(Math.floor(Math.random() * this.requests.length), 1);
  }
}
