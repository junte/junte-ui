import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { GanttComponent, GanttLineComponent, TabComponent, UI, GanttTypes } from 'junte-ui';
import { LocalUI } from '../../../../enums/local-ui';
import { Language } from '../../shared/code-highlight/enum';
import * as faker from 'faker';

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
  ganttType = GanttTypes;
  gantt = new FormControl(this.now);
  ganttTypeControl = this.fb.control(GanttTypes.month);
  form = this.fb.group({
    gantt: this.gantt,
    ganttType: this.ganttTypeControl
  });

  monthArray = Array.from({length: 5}, () => ({
    date: faker.name.findName(),
    id: faker.random.number(100),
    createdAt: faker.date.recent(15),
    createdBy: {
      id: faker.random.number(100),
      login: faker.name.findName()
    },
    from: faker.date.recent(15),
    to: faker.date.recent(-15),
    selfExpense: true,
    status: faker.helpers.randomize(['accepting', 'accepted', 'declined'])
  }));

  yearArray = Array.from({length: 5}, () => ({
    date: faker.name.findName(),
    id: faker.random.number(100),
    createdAt: faker.date.recent(15),
    createdBy: {
      id: faker.random.number(100),
      login: faker.name.findName()
    },
    from: faker.date.recent(90),
    to: faker.date.recent(-80),
    selfExpense: true,
    status: faker.helpers.randomize(['accepting', 'accepted', 'declined'])
  }));
  @ViewChild('code') code: TabComponent;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.requests = this.ganttTypeControl.value === GanttTypes.month ? this.monthArray : this.yearArray;
      this.loading = false;
    }, 3000);
    this.gantt.valueChanges.subscribe(date => console.log('Date changed: ', date));
  }
  switchRequestsArray() {
    this.requests = this.ganttTypeControl.value === GanttTypes.month ? this.monthArray : this.yearArray;
  }
  add() {
    this.requests.push({
      date: faker.name.findName(),
      id: faker.random.number(100),
      createdAt: faker.date.recent(25),
      createdBy: {
        id: faker.random.number(100),
        login: faker.name.findName()
      },
      from: faker.date.recent(this.ganttTypeControl.value === GanttTypes.month ? 15 : 75),
      to: faker.date.recent(this.ganttTypeControl.value === GanttTypes.month ? -15 : -65),
      selfExpense: true,
      status: faker.helpers.randomize(['accepting', 'accepted', 'declined'])
    });
  }

  remove() {
    this.requests.splice(Math.floor(Math.random() * this.requests.length), 1);
  }
}
