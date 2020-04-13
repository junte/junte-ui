import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { fake } from 'faker';
import { DEFAULT_FIRST, DEFAULT_OFFSET, DefaultSearchFilter, TableComponent, UI, isEqual } from 'junte-ui';
import { of } from 'rxjs';
import { delay, distinctUntilChanged } from 'rxjs/operators';

export class TableState {
  q: string;
  first: number;
  offset: number;
  job: string;

  constructor(defs: TableState = null) {
    if (!!defs) {
      Object.assign(this, defs);
    }
  }
}

class Filter extends DefaultSearchFilter {
  job?: string;
}

const DEFAULT_DELAY = 1000;

@Component({
  selector: 'app-table-data',
  templateUrl: 'table-data.component.html'
})

export class TableDataComponent implements OnInit {

  ui = UI;

  tableControl = this.fb.control({
    q: null,
    sort: null,
    first: DEFAULT_FIRST,
    offset: DEFAULT_OFFSET
  });

  form = this.fb.group({
    table: this.tableControl,
    job: null
  });

  jobs: string[] = [];

  @Input() search: boolean;
  @Input() filter: boolean;
  @Input() actions: boolean;

  @Input() set state({first, offset, q, job}: TableState) {
    this.form.patchValue({
      table: {
        q: q || null,
        first: first || DEFAULT_FIRST,
        offset: offset || DEFAULT_OFFSET
      },
      job: job || null
    });
    this.table.load();
  }

  @Output() stateChange = new EventEmitter<TableState>();

  @ViewChild('table', {static: true})
  table: TableComponent;

  mocks = (() => {
    const data = [];
    for (let i = 0; i < Math.random() * (300 - 50) + 50; i++) {
      data.push({
        id: i + 1,
        person: fake('{{name.firstName}} {{name.lastName}}'),
        job: fake('{{name.jobArea}}')
      });
    }

    this.jobs = [...new Set(data.map(d => d.job))];
    return data;
  })();

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.table.fetcher = () => {
      const {table, job} = this.form.getRawValue();
      const filter: Filter = {...table, job};

      let results = this.mocks;
      if (!!filter.q) {
        results = results.filter(({person}) => person.toLowerCase()
          .indexOf(filter.q.toLowerCase()) !== -1);
      }

      if (!!filter.job) {
        results = results.filter(result => filter.job === result.job);
      }

      return of({
        results: results.slice(filter.offset, filter.offset + filter.first),
        count: results.length
      }).pipe(delay(DEFAULT_DELAY));
    };

    this.form.valueChanges.pipe(distinctUntilChanged((val1, val2) => isEqual(val1, val2)))
      .subscribe(({table: {offset, first, q}, job}) => {
        const state = new TableState();

        if (!!+first && +first !== DEFAULT_FIRST) {
          state.first = +first;
        }

        if (!!+offset && +offset !== DEFAULT_OFFSET) {
          state.offset = +offset;
        }

        if (!!q) {
          state.q = q;
        }

        if (!!job) {
          state.job = job;
        }
        this.stateChange.emit(state);
      });
  }
}

