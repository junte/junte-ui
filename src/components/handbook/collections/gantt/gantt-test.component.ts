import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as faker from 'faker';
import { GanttComponent, GanttLineDirective, GanttTypes, TabsComponent, UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
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
  types = {gantt: GanttComponent, line: GanttLineDirective};
  handbook = HANDBOOK;

  gitlab = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=5769%3A15262';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=5769%3A15262';

  requests = [];
  now = new Date();
  statuses = GanttRequestStatuses;
  ganttType = GanttTypes;
  progress = {loading: true, add: false, remove: false, reload: false};

  ganttTypeControl = this.fb.control(GanttTypes.month);
  widthControl = this.fb.control(null);

  builder = this.fb.group({
    ganttType: this.ganttTypeControl,
    width: this.widthControl
  });

  ganttDateControl = this.fb.control(new Date());

  form = this.fb.group({
    ganttDate: this.ganttDateControl
  });

  monthArray = Array.from({length: 3}, () => ({
    date: faker.name.findName(),
    id: faker.random.number(100),
    createdAt: faker.date.recent(15),
    createdBy: {
      id: faker.random.number(100),
      login: faker.name.findName()
    },
    periods: [
      {
        from: faker.date.recent(23),
        to: faker.date.recent(-25),
        status: faker.helpers.randomize(['accepting', 'accepted', 'declined']),
        selfExpense: true
      },
      {
        from: faker.date.recent(23),
        to: faker.date.recent(-25),
        status: faker.helpers.randomize(['accepting', 'accepted', 'declined']),
        selfExpense: true
      },
      {
        from: faker.date.recent(23),
        to: faker.date.recent(-25),
        status: faker.helpers.randomize(['accepting', 'accepted', 'declined']),
        selfExpense: true
      },
      {
        from: faker.date.recent(23),
        to: faker.date.recent(-25),
        status: faker.helpers.randomize(['accepting', 'accepted', 'declined']),
        selfExpense: true
      },
      {
        from: faker.date.recent(23),
        to: faker.date.recent(-25),
        status: faker.helpers.randomize(['accepting', 'accepted', 'declined']),
        selfExpense: true
      }
    ]
  }));

  yearArray = Array.from({length: 3}, () => ({
    date: faker.name.findName(),
    id: faker.random.number(100),
    createdAt: faker.date.recent(15),
    createdBy: {
      id: faker.random.number(100),
      login: faker.name.findName()
    },
    periods: [
      {
        from: faker.date.recent(90),
        to: faker.date.recent(-80),
        status: faker.helpers.randomize(['accepting', 'accepted', 'declined']),
        selfExpense: true
      },
      {
        from: faker.date.recent(90),
        to: faker.date.recent(-80),
        status: faker.helpers.randomize(['accepting', 'accepted', 'declined']),
        selfExpense: true
      },
      {
        from: faker.date.recent(90),
        to: faker.date.recent(-80),
        status: faker.helpers.randomize(['accepting', 'accepted', 'declined']),
        selfExpense: true
      }
    ]
  }));
  @ViewChild('tabs') tabs: TabsComponent;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.requests = this.ganttTypeControl.value === GanttTypes.month ? this.monthArray : this.yearArray;
      this.progress.loading = false;
    }, 3000);
    this.ganttTypeControl.valueChanges.subscribe(value => {
      if (value === GanttTypes.month) {
        this.requests = this.monthArray;
      } else {
        this.requests = this.yearArray;
      }
    });

    this.builder.valueChanges
      .subscribe(() => this.tabs.flash(1));
  }

  add() {
    this.progress.add = true;
    setTimeout(() => {
      this.requests.push({
        date: faker.name.findName(),
        id: faker.random.number(100),
        createdAt: faker.date.recent(25),
        createdBy: {
          id: faker.random.number(100),
          login: faker.name.findName()
        },
        periods: [
          {
            from: faker.date.recent(this.ganttTypeControl.value === GanttTypes.month ? 15 : 75),
            to: faker.date.recent(this.ganttTypeControl.value === GanttTypes.month ? -15 : -65),
            status: faker.helpers.randomize(['accepting', 'accepted', 'declined']),
            selfExpense: true
          }
        ]
      });
      this.progress.add = false;
    }, 1000);
  }

  remove() {
    this.progress.remove = true;
    setTimeout(() => {
      this.requests.splice(Math.floor(Math.random() * this.requests.length), 1);
      this.progress.remove = false;
    }, 1000);
  }

  reload() {
    this.progress.reload = true;
    setTimeout(() => this.progress.reload = false, 1000);
  }
}
