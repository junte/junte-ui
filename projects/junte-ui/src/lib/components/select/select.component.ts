import {AfterContentInit, Component, ContentChildren, ElementRef, forwardRef, Input, OnInit, QueryList, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {SelectMode, UI} from '../../enum/ui';
import {BehaviorSubject, Subject, Subscription} from 'rxjs';
import {debounceTime, finalize} from 'rxjs/operators';
import {SelectOptionComponent} from './select-option/select-option.component';

const SEARCH_DELAY = 500;

@Component({
  selector: 'jnt-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements OnInit, AfterContentInit, ControlValueAccessor {

  ui = UI;

  @Input() loadOptions: Function;
  @Input() mode: SelectMode = SelectMode.single;
  @Input() labelField: string;
  @Input() valueField: string;
  @Input() placeholder: string;
  @Input() required = false;

  @ContentChildren(SelectOptionComponent) listOptionComponent: QueryList<SelectOptionComponent>;

  @ViewChild('search')
  searchInput: ElementRef;

  private fetcher: Subscription;
  private q$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  private _options: SelectOptionComponent[] = [];
  private _ajaxOptions: any[] = [];

  search$: Subject<string> = new Subject<string>();
  selectedItems: any[] = [];
  selected: any = {};
  labels: any = {};
  loading: boolean;
  toggle: boolean;

  get input() {
    return this.searchInput.nativeElement;
  }

  set q(q: string) {
    this.q$.next(q);
  }

  get q() {
    return this.q$.getValue();
  }

  set ajaxOptions(options: any[]) {
    this._ajaxOptions = options;
    this.setLabels(options);
  }

  get ajaxOptions() {
    return this._ajaxOptions;
  }

  set options(options: SelectOptionComponent[]) {
    this._options = options;
    this.setLabels(options);
  }

  get options() {
    return this._options;
  }

  constructor() {
  }

  ngOnInit() {
    const loadOptions = (q: string = null) => {
      if (this.fetcher) {
        this.fetcher.unsubscribe();
      }

      this.loading = true;
      this.fetcher = this.loadOptions(q).pipe(finalize(() => this.loading = false))
        .subscribe(options => this.ajaxOptions = options);
    };

    if (!!this.loadOptions) {
      loadOptions();
    }

    this.search$.pipe(debounceTime(SEARCH_DELAY)).subscribe(q => {
      this.q = q;
      if (!!this.loadOptions) {
        loadOptions(q);
      } else {
        this.options = this.listOptionComponent.filter(o => o.label.toLowerCase().indexOf(q) > -1);
      }
    });
  }

  ngAfterContentInit() {
    this.options = this.listOptionComponent.toArray();
    this.listOptionComponent.changes.subscribe(list => this.options = list.toArray());
  }

  private setLabels(options: any[]) {
    if (!!options) {
      options.forEach(option => this.labels[option[this.valueField]] = option[this.labelField]);
    }
  }

  optionSelect(value) {
    if (this.mode === SelectMode.multiple) {
      const index = this.selectedItems.findIndex(i => i === value);
      if (index > -1) {
        this.selectedItems.splice(index, 1);
      } else {
        this.selectedItems.push(value);
      }
    } else {
      this.selectedItems = [value];
    }
    this.selected[value] = !this.selected[value];

    this.onChange(this.selectedItems);
  }

  writeValue(value: any) {
    if (!!value) {
      this.selectedItems = Array.isArray(value) ? value : [value];
    } else {
      this.selectedItems = [];
    }

    //TODO: @VSmirnov think about it
    this.selectedItems.forEach(i => this.selected[i] = true);
  }

  onChange(items: number[]) {
    throw new Error('Control is not registered on change');
  }

  onTouched() {
    throw new Error('Control is not registered on touched');
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }
}
