import {
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  TemplateRef
} from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter as filtering, finalize } from 'rxjs/operators';
import { ContentApi, MethodApi, PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';
import { I18N_PROVIDERS } from '../../core/i18n/providers';
import { isEqual } from '../../core/utils/equal';
import { PopoverComponent } from '../../overlays/popover/popover.component';
import { TableColumnComponent } from './column/table-column.component';
import { TableFeatures } from './enums';
import { DEFAULT_FIRST, DEFAULT_OFFSET, DefaultSearchFilter } from './types';

const FILTER_DELAY = 500;

@Component({
  selector: 'jnt-table',
  templateUrl: './table.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TableComponent),
      multi: true
    }, ...I18N_PROVIDERS
  ]
})
export class TableComponent implements OnInit, OnDestroy, ControlValueAccessor {

  ui = UI;

  private count: number;
  private subscriptions = {fetcher: new Subscription()};
  popover: PopoverComponent;

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
  @ContentChild('tableRowActionsTemplate')
  tableRowActionsTemplate: TemplateRef<any>;

  @ContentApi({
    selector: '#tableActionsTemplate',
    description: 'table actions template'
  })
  @ContentChild('tableActionsTemplate')
  tableActionsTemplate: TemplateRef<any>;

  @ContentApi({
    selector: '#tableFiltersTemplate',
    description: 'table filters template'
  })
  @ContentChild('tableFiltersTemplate')
  tableFiltersTemplate: TemplateRef<any>;

  get pagesCount() {
    return Math.ceil(this.count / this.pageSize.value);
  }

  onChange: (filter: DefaultSearchFilter) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(private logger: NGXLogger,
              private fb: FormBuilder) {
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
    this.subscriptions.fetcher.unsubscribe();
  }

  @MethodApi({description: 'reload table'})
  load(filter = this.form.getRawValue()) {
    if (!!this.fetcher) {
      this.progress.loading = true;
      this.subscriptions.fetcher.unsubscribe();
      this.subscriptions.fetcher = this.fetcher(filter)
        .pipe(finalize(() => this.progress.loading = false))
        .subscribe(resp => {
          this.source = resp.results;
          this.count = resp.count;
        });
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

  hideActions() {
    this.popover.hide();
  }
}
