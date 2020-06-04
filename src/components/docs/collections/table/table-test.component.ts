import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fake } from 'faker';
import { UI } from 'junte-ui';
import { TabComponent } from 'junte-ui';
import { DEFAULT_FIRST, DEFAULT_OFFSET } from 'junte-ui';
import { TableComponent } from 'junte-ui';
import { TableColumnComponent } from 'junte-ui';
import { TableState } from './data/table-data.component';
import { LocalUI } from 'src/enums/local-ui';
import { AnalyticsType } from 'src/enums/analyticsType';

@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.scss']
})
export class TableTestComponent implements OnInit {

  analyticsType = AnalyticsType;
  ui = UI;
  localUi = LocalUI;
  types = {table: TableComponent, column: TableColumnComponent};

  private _state = new TableState();

  @ViewChild('code') code: TabComponent;

  searchControl = this.fb.control(true);
  filterControl = this.fb.control(true);
  actionsControl = this.fb.control(true);

  builder = this.fb.group({
    search: this.searchControl,
    filter: this.filterControl,
    actions: this.actionsControl,
  });

  set state(state: TableState) {
    this._state = state;
    this.router.navigate([state], {relativeTo: this.route})
      .then(() => null);
  }

  get state() {
    return this._state;
  }

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(({job, q, first, offset}) => {
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


      this.state = state;
    });

    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }
}
