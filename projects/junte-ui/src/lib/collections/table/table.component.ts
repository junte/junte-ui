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
import { debounceTime, filter as filtering, finalize } from 'rxjs/operators';
import { ContentApi, MethodApi, PropertyApi } from '../../core/decorators/api';
import { Feature } from '../../core/enums/feature';
import { UI } from '../../core/enums/ui';
import { I18N_PROVIDERS } from '../../core/i18n/providers';
import { PopoverComponent } from '../../overlays/popover/popover.component';
import { TableColumnComponent } from './table-column.component';
import { DefaultSearchFilter } from './types';

const FIRST = 10;
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

  private subscriptions = {fetcher: new Subscription()};
  popover: PopoverComponent;

  progress = {loading: false};
  source: any[] = [];
  count: number;

  orderByControl = this.fb.control(null);
  firstControl = this.fb.control(FIRST);

  form = this.fb.group({
    q: [null],
    orderBy: this.orderByControl,
    first: this.firstControl,
    offset: [0]
  });

  @HostBinding('attr.host') readonly host = 'jnt-table-host';

  @PropertyApi({
    description: 'Table features',
    path: 'ui.feature',
    options: [Feature.search]
  })
  @Input() features: Feature[] = [];

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
  rowActionsTemplate: TemplateRef<any>;

  @ContentApi({
    selector: '#tableActionsTemplate',
    description: 'table actions template'
  })
  @ContentChild('tableActionsTemplate')
  actionsTemplate: TemplateRef<any>;

  @ContentApi({
    selector: '#tableFiltersTemplate',
    description: 'table filters template'
  })
  @ContentChild('tableFiltersTemplate')
  filtersTemplate: TemplateRef<any>;

  onChange: (filter: DefaultSearchFilter) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(private logger: NGXLogger,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form.valueChanges.pipe(filtering(() => !!this.fetcher),
      debounceTime(FILTER_DELAY)).subscribe(({q, orderBy, first, offset}) => {
      this.onChange({q, orderBy, first, offset});
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
    this.orderByControl.setValue(this.orderByControl.value === field ? `-${field}` : field);
  }

  writeValue({q, orderBy, first, offset}: DefaultSearchFilter) {
    this.form.patchValue({q, orderBy, first, offset},
      {emitEvent: false});
  }

  hideActions() {
    this.popover.hide();
  }
}
