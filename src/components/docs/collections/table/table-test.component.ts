import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { serialize } from '@junte/serialize-ts';
import { TabComponent, TableColumnComponent, TableComponent, UI } from 'junte-ui';
import { CATEGORIES } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';
import { TableSections, TableState, TableStateUpdate } from './data/table-data.types';

const DEFAULT_FIRST = 10;

@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.scss']
})
export class TableTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  sections = TableSections;
  types = {table: TableComponent, column: TableColumnComponent};
  categories = CATEGORIES;

  @ViewChild('code') code: TabComponent;

  searchControl = this.fb.control(true);
  reloadControl = this.fb.control(true);
  filterControl = this.fb.control(true);
  actionsControl = this.fb.control(true);
  rowActionsControl = this.fb.control(true);

  builder = this.fb.group({
    search: this.searchControl,
    reload: this.reloadControl,
    filter: this.filterControl,
    actions: this.actionsControl,
    rowActions: this.rowActionsControl
  });

  state: TableState;

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(({first, offset, job, q}) => {
      this.state = {
        first: !!+first && +first !== DEFAULT_FIRST ? +first : undefined,
        offset: +offset > 0 ? +offset : 0,
        q: q || null,
        job: job || null
      };
    });

    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

  save(state: TableStateUpdate) {
    this.router.navigate([serialize(state)], {relativeTo: this.route})
      .then(() => null);
  }
}
