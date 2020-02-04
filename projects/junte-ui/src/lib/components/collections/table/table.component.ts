import {
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  TemplateRef
} from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter as filtering, finalize } from 'rxjs/operators';
import { UI } from '../../../enums/ui';
import { DEFAULT_FIRST, DEFAULT_OFFSET, DefaultSearchFilter } from '../../../models/table';
import { isEqual } from '../../../utils/equal';
import { Subscriptions } from '../../../utils/subscriptions';
import { TableColumnComponent } from './column/table-column.component';
import { TableFeatures } from './enums';

const FILTER_DELAY = 500;

@Component({
  selector: 'jnt-table',
  templateUrl: './table.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TableComponent),
      multi: true
    }
  ]
})
export class TableComponent implements OnInit, OnDestroy, ControlValueAccessor {

  ui = UI;
  tableFeatures = TableFeatures;

  private count: number;
  private subscriptions = new Subscriptions();

  progress = {loading: false};
  source: any[] = [];
  q = new FormControl(null);
  orderBy = new FormControl(null);
  pageSize = new FormControl(DEFAULT_FIRST);
  page = new FormControl((DEFAULT_OFFSET / DEFAULT_FIRST) + 1);

  form = this.builder.group({
    q: this.q,
    orderBy: this.orderBy,
    page: this.page,
    pageSize: this.pageSize
  });

  @HostBinding('attr.host') readonly host = 'jnt-table-host';

  @ContentChildren(TableColumnComponent)
  columns: QueryList<TableColumnComponent>;

  @ContentChild('rowTemplate', {static: false})
  rowTemplate: TemplateRef<any>;

  @ContentChild('rowActions', {static: false})
  rowActionsTemplate: TemplateRef<any>;

  @ContentChild('actions', {static: false})
  actionsTemplate: TemplateRef<any>;

  @ContentChild('filters', {static: false})
  filtersTemplate: TemplateRef<any>;

  @HostBinding('attr.features')
  @Input() features: TableFeatures[] = [];

  @Input() fetcher: Function;
  @Output() reloaded = new EventEmitter<any>();

  get pagesCount() {
    return Math.ceil(this.count / this.pageSize.value);
  }

  constructor(private builder: FormBuilder) {
  }

  ngOnInit() {
    this.form.valueChanges.pipe(
      filtering(() => !!this.fetcher),
      debounceTime(FILTER_DELAY),
      distinctUntilChanged((val1, val2) => isEqual(val1, val2))
    ).subscribe(state => {
      this.onChange({
        q: state.q,
        sort: state.orderBy,
        first: state.pageSize,
        offset: (state.page - 1) * state.pageSize
      });
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  load(filter = this.form.getRawValue()) {
    if (!!this.fetcher) {
      this.progress.loading = true;
      this.subscriptions.push('rows', this.fetcher(filter)
        .pipe(finalize(() => this.progress.loading = false))
        .subscribe(resp => {
          this.source = resp.results;
          this.count = resp.count;
        }));
    }
  }

  sorting(field: string) {
    this.orderBy.setValue(this.orderBy.value === field ? `-${field}` : field);
  }

  writeValue({q, sort, first, offset}: DefaultSearchFilter) {
    this.form.patchValue({
      q,
      orderBy: sort,
      pageSize: first,
      page: Math.floor(offset / first) + 1
    });
  }

  onChange(filter: DefaultSearchFilter) {
  }

  onTouched() {
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }
}
