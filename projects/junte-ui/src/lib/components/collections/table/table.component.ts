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
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PropertyApi } from '../../../decorators/api';
import { debounceTime, distinctUntilChanged, filter as filtering, finalize } from 'rxjs/operators';
import { ContentApi, MethodApi } from '../../../decorators/api';
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

  private count: number;
  private subscriptions = new Subscriptions();

  tableFeatures = TableFeatures;
  progress = {loading: false};
  source: any[] = [];

  q = this.fb.control(null);
  orderBy = this.fb.control(null);
  pageSize = this.fb.control(DEFAULT_FIRST);
  page = this.fb.control((DEFAULT_OFFSET / DEFAULT_FIRST) + 1);

  form = this.fb.group({
    q: this.q,
    orderBy: this.orderBy,
    page: this.page,
    pageSize: this.pageSize
  });

  @HostBinding('attr.host') readonly host = 'jnt-table-host';

  @PropertyApi({
    description: 'Table features',
    path: 'ui.collections.table.features',
    options: [TableFeatures.search]
  })
  @HostBinding('attr.features')
  @Input() features: TableFeatures[] = [];

  @PropertyApi({
    description: 'Table fetch function',
    type: 'Function'
  })
  @Input() fetcher: Function;

  @PropertyApi({
    description: 'Output event of reload table'
  })
  @Output() reloaded = new EventEmitter<any>();

  @ContentChildren(TableColumnComponent)
  columns: QueryList<TableColumnComponent>;

  @ContentApi({
    selector: '#tableRowActionsTemplate',
    description: 'table row actions template'
  })
  @ContentChild('tableRowActionsTemplate', {static: false})
  tableRowActionsTemplate: TemplateRef<any>;

  @ContentApi({
    selector: '#tableActionsTemplate',
    description: 'table actions template'
  })
  @ContentChild('tableActionsTemplate', {static: false})
  tableActionsTemplate: TemplateRef<any>;

  @ContentApi({
    selector: '#tableFiltersTemplate',
    description: 'table filters template'
  })
  @ContentChild('tableFiltersTemplate', {static: false})
  tableFiltersTemplate: TemplateRef<any>;

  get pagesCount() {
    return Math.ceil(this.count / this.pageSize.value);
  }

  constructor(private fb: FormBuilder) {
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

  @MethodApi({description: 'reload table'})
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

  @MethodApi({description: 'sorting data table by field'})
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
