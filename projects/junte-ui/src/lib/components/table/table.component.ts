import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  TemplateRef
} from '@angular/core';
import { filter as filtering, finalize } from 'rxjs/operators';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, DefaultSearchFilter, Order, SearchFilter } from './model';
import { Subscription } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { TableColumnComponent } from './column/table-column.component';

@Component({
  selector: 'jnt-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterContentInit, OnDestroy {

  private subscriptions = new Subscription();
  private _count: number;

  columns: TableColumnComponent[] = [];
  progress = {loading: false};
  sort = this.formBuilder.control(null);
  order = this.formBuilder.control(Order.asc);

  filterForm = this.formBuilder.group({
    sort: this.sort,
    order: this.order,
    page: [DEFAULT_PAGE],
    pageSize: [DEFAULT_PAGE_SIZE]
  });

  source: any[] = [];

  @ContentChildren(TableColumnComponent)
  columnsComponent: QueryList<TableColumnComponent>;

  @ContentChild('rowTemplate')
  rowTemplate: TemplateRef<any>;

  @Input()
  filter: SearchFilter = new DefaultSearchFilter({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE
  });

  @Input()
  fetcher: Function;

  set count(count: number) {
    this._count = count;
  }

  get count() {
    return this._count;
  }

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.filterForm.valueChanges.pipe((filtering(() => !!this.fetcher)))
      .subscribe(filter => {
        console.log(filter);
        Object.assign(this.filter, filter);
        this.load();
      });
  }

  ngAfterContentInit() {
    this.columns = this.columnsComponent.toArray();
    this.columnsComponent.changes.subscribe(c => this.columns = c.toArray());
  }

  load() {
    this.progress.loading = true;
    this.fetcher(this.filter)
      .pipe(finalize(() => this.progress.loading = false))
      .subscribe(resp => {
        this.source = resp.results;
        this.count = resp.count;
      });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  sorting(sort: string) {
    this.filterForm.patchValue(this.sort.value !== sort ?
      {sort: sort, order: Order.asc}
      : {order: this.order.value === Order.asc ? Order.desc : Order.asc});
  }
}
