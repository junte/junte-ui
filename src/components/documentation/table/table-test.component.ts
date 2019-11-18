import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DEFAULT_FIRST, DEFAULT_OFFSET, DefaultSearchFilter, isEqual, TableComponent, UI, defined} from 'junte-ui';
import {Observable, of} from 'rxjs';
import {delay, distinctUntilChanged, tap} from 'rxjs/operators';
import merge from 'merge-anything';
import {fake} from 'faker';

const DEFAULT_DELAY = 1000;

class Filter extends DefaultSearchFilter {
  job?: string;
}

@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.scss']
})
export class TableTestComponent implements OnInit {

  ui = UI;

  form = this.builder.group({
    table: [{
      q: null,
      sort: null,
      first: DEFAULT_FIRST,
      offset: DEFAULT_OFFSET
    }],
    job: []
  });

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
    return data;
  })();

  constructor(private builder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.table.fetcher = (): Observable<any> => {
      const {table, job} = this.form.getRawValue();
      const filter: Filter = {...table, job};
      console.log(filter);

      let results = this.mocks;
      if (!!filter.q) {
        results = results.filter(({person}) => person.indexOf(filter.q) !== -1);
      }

      return of({
        results: results.slice(filter.offset, filter.offset + filter.first),
        count: this.mocks.length
      }).pipe(delay(DEFAULT_DELAY));
    };

    this.form.valueChanges.pipe(distinctUntilChanged((val1, val2) => isEqual(val1, val2)),
      tap(({table: {offset, first, q}, job}) => this.save({offset, first, q, job})))
      .subscribe(() => this.table.load());

    this.route.params.subscribe(({q, sort, first, offset, job}) => {
      const filter = merge({extensions: [defined]},
        this.form.getRawValue(), {table: {q, sort, first, offset}, job});
      this.form.patchValue(filter);
    });
  }

  save(filter: Filter) {
    const state: { q?, sort?, first?, offset?, job? } = {};
    if (filter.offset !== DEFAULT_OFFSET) {
      state.offset = filter.offset;
    }
    if (filter.first !== DEFAULT_FIRST) {
      state.first = filter.first;
    }

    if (!!filter.q) {
      state.q = filter.q;
    }

    if (!!filter.job) {
      state.job = filter.job;
    }

    this.router.navigate([state], {
      relativeTo: this.route
    }).then(() => null);
  }

  loadJobs() {
    return (): Observable<any> => of([
      {value: 1, label: 'PFC CSKA Moscow'},
      {value: 2, label: 'FC Real Madrid'},
      {value: 3, label: 'FC Manchester United'}
    ]).pipe(delay(DEFAULT_DELAY));
  }

  edit() {
    console.log('edit');
  }

  delete() {
    console.log('delete');
  }
}
