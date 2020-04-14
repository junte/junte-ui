import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { GanttComponent, GanttLineComponent, TabComponent, UI } from 'junte-ui';
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
  gantt = new FormControl(this.now);
  form = this.fb.group({
    gantt: this.gantt
  });

  @ViewChild('code') code: TabComponent;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.requests = Array.from({length: 5}, () => ({
        date: faker.name.findName(),
        id: faker.random.number(100),
        createdAt: faker.date.recent(25),
        createdBy: {
          id: faker.random.number(100),
          login: faker.name.findName()
        },
        from: faker.date.recent(25),
        to: faker.date.recent(-10),
        selfExpense: true,
        status: faker.helpers.randomize(['accepting', 'accepted', 'declined'])
      }));

      this.loading = false;
    }, 3000);
    this.gantt.valueChanges.subscribe(date => console.log('Date changed: ', date));
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
      from: faker.date.recent(25),
      to: faker.date.recent(-15),
      selfExpense: true,
      status: faker.helpers.randomize(['accepting', 'accepted', 'declined'])
    });
  }

  remove() {
    this.requests.splice(Math.floor(Math.random() * this.requests.length), 1);
  }
}
