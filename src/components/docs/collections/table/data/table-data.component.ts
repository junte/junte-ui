import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { fake } from 'faker';
import { TableComponent, UI } from 'junte-ui';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { DataFilter, TableState, TableStateUpdate } from './table-data.types';

const DEFAULT_DELAY = 1000;
export const DEFAULT_FIRST = 10;

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
  jobs = MOCK_JOBS;

  tableControl = this.fb.control({
    first: [DEFAULT_FIRST],
    offset: [0],
    q: [null],
    sort: [null]
  });
  form = this.fb.group({
    table: this.tableControl,
    job: [null]
  });

  @Input()
  search: boolean;

  @Input()
  filter: DataFilter;

  @Input()
  sections: string[];

  previous = JSON.stringify([DEFAULT_FIRST, null, null]);

  @Input() set state({first, offset, q, job}: TableState) {
    this.form.patchValue({
      table: {
        q: q || null,
        first: first || DEFAULT_FIRST,
        offset: offset || 0
      },
      job: job || null
    }, {emitEvent: false});

    this.previous = JSON.stringify([first || DEFAULT_FIRST, q, job]);
  }

  @Output()
  filtered = new EventEmitter<TableStateUpdate>();

  @ViewChild('table', {static: true})
  table: TableComponent;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.table.fetcher = () => this.fetchData();

    this.form.valueChanges.pipe(tap(({table: {first, q}, job}) => {
      const reset = JSON.stringify([first, q, job]);
      if (this.previous !== reset) {
        this.tableControl.patchValue({first, offset: 0, q: q}, {emitEvent: false});
      }
      this.previous = reset;
    })).subscribe(() => {
      const {table: {offset, first, q}, job} = this.form.getRawValue();
      this.filtered.emit(new TableStateUpdate({
        first: first !== DEFAULT_FIRST ? first : undefined,
        offset: offset > 0 ? offset : undefined,
        q: q || undefined,
        job: job || undefined
      }));
      this.load();
    });

    this.load();
  }

  private load() {
    const {table: {q, first, offset}, job} = this.form.getRawValue();
    this.filter = new DataFilter({q, first, offset, job});
    this.table.load();
  }

  private fetchData() {
    const {q, first, offset, job} = this.filter;
    let results = MOCK_DATA;
    if (!!q) {
      results = results.filter(({person}) => person.toLowerCase()
        .indexOf(q.toLowerCase()) !== -1);
    }

    if (!!job) {
      results = results.filter(result => job === result.job);
    }

    return of({
      results: results.slice(offset, offset + first),
      count: results.length
    }).pipe(delay(DEFAULT_DELAY));
  }
}
