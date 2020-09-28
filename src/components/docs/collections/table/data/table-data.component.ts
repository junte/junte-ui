import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { fake } from 'faker';
import { DefaultSearchFilter, TableComponent, UI } from 'junte-ui';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export class TableState {

  q: string;
  first: number;
  offset: number;
  job: string;

  constructor(defs: Partial<TableState> = null) {
    if (!!defs) {
      Object.assign(this, defs);
    }
  }
}

class Filter extends DefaultSearchFilter {
  job?: string;
}

const DEFAULT_DELAY = 1000;
export const DEFAULT_FIRST = 10;
export const DEFAULT_OFFSET = 0;

const MOCK_DATA = [];
for (let i = 0; i < Math.random() * (300 - 50) + 50; i++) {
  MOCK_DATA.push({
    id: i + 1,
    person: fake('{{name.firstName}} {{name.lastName}}'),
    job: fake('{{name.jobArea}}')
  });
}

const MOCK_JOBS = [...new Set(MOCK_DATA.map(d => d.job))];

@Component({
  selector: 'app-table-data',
  templateUrl: 'table-data.component.html'
})

export class TableDataComponent implements OnInit {

  ui = UI;

  form = this.fb.group({
    table: this.fb.control({
      q: null,
      sort: null,
      first: DEFAULT_FIRST,
      offset: DEFAULT_OFFSET
    }),
    job: null
  });

  jobs = MOCK_JOBS;

  @Input()
  search: boolean;

  @Input()
  filter: boolean;

  @Input()
  actions: boolean;

  @Input() set state({first, offset, q, job}: TableState) {
    this.form.patchValue({
      table: {
        q: q || null,
        first: first || DEFAULT_FIRST,
        offset: offset || DEFAULT_OFFSET
      },
      job: job || null
    }, {emitEvent: false});
  }

  @Output()
  filtered = new EventEmitter<TableState>();

  @ViewChild('table', {static: true})
  table: TableComponent;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.table.fetcher = () => {
      const {table: {q, first, offset}, job} = this.form.getRawValue();
      return this.loadData({q, first, offset, job});
    };

    this.form.valueChanges.subscribe(({table: {offset, first, q}, job}) => {
      this.filtered.emit(new TableState({
        first: !!+first && +first !== DEFAULT_FIRST ? +first : undefined,
        offset: !!+offset && +offset !== DEFAULT_OFFSET ? +offset : undefined,
        q: q || undefined,
        job: job || undefined
      }));
      this.table.load();
    });

    this.table.load();
  }

  private loadData(filter: Filter) {
    let results = MOCK_DATA;
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
  }
}

