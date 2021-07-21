import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TableComponent, UI } from 'junte-ui';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { HEROES } from 'src/consts';
import { DataFilter, TableSections, TableState, TableStateUpdate } from './table-data.types';

const DEFAULT_DELAY = 1000;
export const DEFAULT_FIRST = 10;

const HEROES_ARRAY = Object.values(HEROES);

const HEROES_DATA = [];
for (let i = 0; i < 150; i++) {
  const k = Math.floor(Math.random() * (10 - 0) + 0);
  HEROES_DATA.push({
    id: i + 1,
    hero: HEROES_ARRAY[k].name,
    ability: HEROES_ARRAY[k].ability,
    avatar: HEROES_ARRAY[k].avatar
  });
}

const HEROES_ABILITIES = [...new Set(HEROES_DATA.map(d => d.ability))];


@Component({
  selector: 'app-table-data',
  templateUrl: 'table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})

export class TableDataComponent implements OnInit {

  ui = UI;
  tableSections = TableSections;
  abilities = HEROES_ABILITIES;

  tableControl = this.fb.control({
    first: [DEFAULT_FIRST],
    offset: [0],
    q: [null],
    sort: [null]
  });
  form = this.fb.group({
    table: this.tableControl,
    ability: [null]
  });

  @Input()
  filter: DataFilter;

  @Input()
  sections: TableSections[] = [];

  previous = JSON.stringify([DEFAULT_FIRST, null, null]);

  @Input() set state({first, offset, q, ability}: TableState) {
    this.form.patchValue({
      table: {
        q: q || null,
        first: first || DEFAULT_FIRST,
        offset: offset || 0
      },
      ability: ability || null
    }, {emitEvent: false});

    this.previous = JSON.stringify([first || DEFAULT_FIRST, q, ability]);
  }

  @Output()
  filtered = new EventEmitter<TableStateUpdate>();

  @ViewChild('table', {static: true})
  table: TableComponent;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.table.fetcher = () => this.fetchData();

    this.form.valueChanges.pipe(tap(({table: {first, q}, ability}) => {
      const reset = JSON.stringify([first, q, ability]);
      if (this.previous !== reset) {
        this.tableControl.patchValue({first, offset: 0, q: q}, {emitEvent: false});
      }
      this.previous = reset;
    })).subscribe(() => {
      const {table: {offset, first, q}, ability} = this.form.getRawValue();
      this.filtered.emit(new TableStateUpdate({
        first: first !== DEFAULT_FIRST ? first : undefined,
        offset: offset > 0 ? offset : undefined,
        q: q || undefined,
        ability: ability || undefined
      }));
      this.load();
    });

    this.load();
  }

  private load() {
    const {table: {q, first, offset}, ability} = this.form.getRawValue();
    this.filter = new DataFilter({q, first, offset, ability});
    this.table.load();
  }

  private fetchData() {
    const {q, first, offset, ability} = this.filter;
    let results = HEROES_DATA;
    if (!!q) {
      results = results.filter(({hero}) => hero.toLowerCase()
        .indexOf(q.toLowerCase()) !== -1);
    }

    if (!!ability) {
      results = results.filter(result => ability === result.ability);
    }

    return of({
      results: results.slice(offset, offset + first),
      count: results.length
    }).pipe(delay(DEFAULT_DELAY));
  }
}
