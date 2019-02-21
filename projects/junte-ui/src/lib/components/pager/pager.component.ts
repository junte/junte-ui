import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'jnt-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PagerComponent),
    multi: true
  }]
})
export class PagerComponent {

  private _pagesCount: number;
  private _selectedPage = 1;
  private _size = 3;

  pages: number[];

  @ViewChild('page_size', {read: ElementRef})
  __page_size: ElementRef;

  @Input()
  set size(size: number) {
    this._size = size;
    this.updatePages();
  }

  get size() {
    return this._size;
  }

  @Input()
  set pagesCount(pagesCount: number) {
    this._pagesCount = pagesCount;
    this.updatePages();
  }

  get pagesCount() {
    return this._pagesCount;
  }

  set selectedPage(page: number) {
    this._selectedPage = page;
    this.updatePages();
  }

  get selectedPage() {
    return this._selectedPage;
  }

  @Input()
  pageSize: number;

  @Output()
  pageSizeChange: EventEmitter<number> = new EventEmitter<number>();

  onModelChange(value: any) {
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(value: any): void {
    this.selectedPage = value;
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.pagesCount) {
      this.onModelChange(page);
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
