import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { GanttComponent, GanttLineComponent, TabComponent, UI } from 'junte-ui';
import { REQUESTS } from 'src/components/docs/collections/gantt/requests';
import { LocalUI } from '../../../../enums/local-ui';
import { Language } from '../../shared/code-highlight/enum';

export enum GanttRequestStatuses {
  accepting = 'accepting',
  accepted = 'accepted',
  declined = 'declined'
}


@Component({
  selector: 'app-gantt-test',
  templateUrl: './gantt-test.component.html',
  styleUrls: ['./gantt-test.component.scss']
})
export class GanttTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  language = Language;
  types = {gantt: GanttComponent, line: GanttLineComponent};

  requests = [];
  now = new Date();
  statuses = GanttRequestStatuses;
  loading = true;
  gantt = new FormControl(this.now);
  form = this.fb.group({
    gantt: this.gantt
  });

  @ViewChild('code') code: TabComponent;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    setTimeout(() => {
      const month = this.now.getMonth();
      const year = this.now.getFullYear().toString();
      const currentMonth = ('0' + (month + 1)).slice(-2);
      const prevMonth = ('0' + month).slice(-2);
      const nextMonth = ('0' + (month + 2)).slice(-2);

      const req = REQUESTS.replace(/YYYY/g, year)
        .replace(/MMM/g, nextMonth)
        .replace(/MM/g, currentMonth)
        .replace(/M/g, prevMonth);

      this.requests = JSON.parse(req).map(request => {
        const req = {...request};
        req.from = new Date(req.from);
        req.to = new Date(req.to);
        return req;
      });

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
