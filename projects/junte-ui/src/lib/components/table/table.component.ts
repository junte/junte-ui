import {
  Component,
  ContentChild,
  ContentChildren,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  TemplateRef
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscriptions } from '../../utils/subscriptions';
import { debounceTime, filter as filtering, finalize } from 'rxjs/operators';
import { UI } from '../../enum/ui';
import { DEFAULT_PAGE_SIZE, DefaultSearchFilter, Order, SearchFilter } from '../../models/table';
import { TableColumnComponent } from './column/table-column.component';

const FILTER_DELAY = 300;

@Component({
  selector: 'jnt-table',
  templateUrl: './table.encapsulated.html'
})
export class TableComponent implements OnInit, OnDestroy {

  ui = UI;

  private _count: number;
  private subscriptions = new Subscriptions();

  progress = {loading: false};

  @HostBinding('attr.host') readonly host = 'jnt-table-host';

  filterForm: FormGroup;
  sort: FormControl;
  order: FormControl;
  page: FormControl;
  offset: FormControl;
  first: FormControl;

  source: any[] = [];

  @ContentChildren(TableColumnComponent)
  columns: QueryList<TableColumnComponent>;

  @ContentChild('rowTemplate')
  rowTemplate: TemplateRef<any>;

  @ContentChild('rowActions')
  rowActionsTemplate: TemplateRef<any>;

  @ContentChild('actions')
  actionsTemplate: TemplateRef<any>;

  @ContentChild('filters')
  filtersTemplate: TemplateRef<any>;

  @HostBinding('attr.search')
  @Input()
  search = false;

  @Input()
  filter: SearchFilter = new DefaultSearchFilter({
    offset: 0,
    first: DEFAULT_PAGE_SIZE
  });

  @Input()
  fetcher: Function;

  set count(count: number) {
    this._count = count;
  }

  get count() {
    return this._count;
  }

  get pagesCount() {
    return Math.ceil(this.count / this.filterForm.get('first').value);
  }

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.sort = this.formBuilder.control(null);
    this.order = this.formBuilder.control(Order.asc);
    this.first = this.formBuilder.control(DEFAULT_PAGE_SIZE);
    this.offset = this.formBuilder.control(0);
    this.page = this.formBuilder.control(((+this.offset.value / +this.first.value) + 1));
    this.filterForm = this.formBuilder.group({
      sort: this.sort,
      order: this.order,
      query: [''],
      offset: this.offset,
      page: this.page,
      first: this.first
    });

    this.filterForm.valueChanges.pipe(filtering(() => !!this.fetcher), debounceTime(FILTER_DELAY))
      .subscribe((filter: DefaultSearchFilter) => {
        filter.offset = (filter.page - 1) * filter.first;
        Object.assign(this.filter, filter);
        this.load();
      });
  }

  load() {
    this.progress.loading = true;
    this.subscriptions.push('rows', this.fetcher(this.filter)
      .pipe(finalize(() => this.progress.loading = false))
      .subscribe(resp => {
        this.source = resp.results;
        this.count = resp.count;
      }));
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
