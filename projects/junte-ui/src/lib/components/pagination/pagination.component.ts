import { Component, forwardRef, HostBinding, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UI } from '../../enum/ui';

@Component({
  selector: 'jnt-pagination',
  templateUrl: './pagination.encapsulated.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PaginationComponent),
    multi: true
  }]
})
export class PaginationComponent {

  @HostBinding('attr.host') readonly host = 'jnt-pagination-host';

  @HostBinding('style.visibility')
  get visible() {
    return this.pagesCount > 1 ? 'visible' : 'collapse';
  }

  ui = UI;

  private _pagesCount: number;
  private _selectedPage = 1;
  private size = 3;

  pages: number[];

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

  onModelChange(value: number) {
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(value: number): void {
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
