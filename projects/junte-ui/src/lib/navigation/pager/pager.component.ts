import { Component, forwardRef, HostBinding, HostListener, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';
import { PagerMode } from './enums';

export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_PAGE = 1;

@Component({
  selector: 'jnt-pager',
  templateUrl: './pager.encapsulated.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PagerComponent),
    multi: true
  }]
})
export class PagerComponent implements ControlValueAccessor {

  ui = UI;

  private _count: number;
  private _pageSize = DEFAULT_PAGE_SIZE;
  private _selectedPage = DEFAULT_PAGE;
  private size = 3;

  pages: number[];

  @HostBinding('attr.host')
  readonly host = 'jnt-pager-host';

  @HostBinding('style.visibility')
  get visible() {
    return this.pagesCount > 1 ? 'visible' : 'collapse';
  }

  @PropertyApi({
    description: 'Items count for pager',
    type: 'number',
  })
  @Input()
  set count(count: number) {
    this._count = count;
    this.updatePages();
  }

  get pagesCount() {
    return Math.ceil(this._count / this.pageSize);
  }

  @PropertyApi({
    description: 'Page size for pager',
    type: 'number',
    default: '10'
  })
  @Input()
  set pageSize(pageSize: number) {
    this._pageSize = pageSize;
    this.updatePages();
  }

  get pageSize() {
    return this._pageSize;
  }

  @PropertyApi({
    description: 'Mode for pager',
    path: 'ui.pager.mode',
    options: [PagerMode.offset, PagerMode.page],
    default: PagerMode.offset
  })
  @Input()
  mode: PagerMode = PagerMode.offset;

  onChange: (value: any) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  set selectedPage(page: number) {
    this._selectedPage = page;
    this.updatePages();
  }

  get selectedPage() {
    return this._selectedPage;
  }

  constructor(private logger: NGXLogger) {
  }

  writeValue(value: number): void {
    if (!!value) {
      switch (this.mode) {
        case PagerMode.page:
          this.selectedPage = value;
          break;
        case PagerMode.offset:
          this.selectedPage = Math.ceil(value / this.pageSize);
          break;
      }
    } else {
      this.selectedPage = DEFAULT_PAGE;
    }
  }

  setPage(page: number) {
    if (page >= DEFAULT_PAGE && page <= this.pagesCount) {
      switch (this.mode) {
        case PagerMode.page:
          this.onChange(page);
          break;
        case PagerMode.offset:
          this.onChange((page - 1) * this.pageSize);
          break;
      }
      this.selectedPage = page;
    }
  }

  updatePages() {
    const pages: number[] = [];

    let shift = Math.max(this.size - this.selectedPage + 1, 0);
    const end = Math.min(this.selectedPage + this.size + shift, this.pagesCount);

    shift = Math.max(this.selectedPage + this.size - this.pagesCount, 0);
    const start = Math.max(this.selectedPage - this.size - shift, 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    this.pages = pages;
  }
}
