import { AfterContentInit, Component, ContentChildren, forwardRef, Input, OnInit, QueryList } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOptionComponent } from 'projects/junte-ui/src/lib/components/select/select-option/select-option.component';
import { UI } from 'projects/junte-ui/src/lib/enum/ui';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { debounceTime, finalize } from 'rxjs/operators';

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

  @Input() loadOptions: Function;
  @Input() mode = UI.select.single;
  @Input() labelField: string;
  @Input() valueField: string;
  @Input() placeholder: string;
  @Input() required = false;

  @ContentChildren(SelectOptionComponent) listOptionComponent: QueryList<SelectOptionComponent>;

  private fetcher: Subscription;
  private q$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  private _options: SelectOptionComponent[] = [];
  private _ajaxOptions: any[] = [];

  search$: Subject<string> = new Subject<string>();
  loading: boolean;

  set q(q: string) {
    this.q$.next(q);
  }

  get q() {
    return this.q$.getValue();
  }

  set ajaxOptions(options: any[]) {
    this._ajaxOptions = options;
  }

  get ajaxOptions() {
    return this._ajaxOptions;
  }

  set options(options: SelectOptionComponent[]) {
    this._options = options;
  }

  get options() {
    return this._options;
  }

  constructor() {
  }

  ngOnInit() {
    const loadAjaxOptions = (q: string = null) => {
      if (this.fetcher) {
        this.fetcher.unsubscribe();
      }

      this.loading = true;
      this.fetcher = this.loadOptions(q).pipe(finalize(() => this.loading = false))
        .subscribe(options => this.ajaxOptions = options);
    };

    if (!!this.loadOptions) {
      loadAjaxOptions();
    }

    this.search$.pipe(debounceTime(SEARCH_DELAY)).subscribe(q => {
      this.q = q;
      if (!!this.loadOptions) {
        loadAjaxOptions(q);
      } else {
        this.options = this.listOptionComponent.filter(o => o.label.toLowerCase().indexOf(q) > -1);
      }
    });
  }

  ngAfterContentInit() {
    this.options = this.listOptionComponent.toArray();
  }

  writeValue(value) {
  }

  onChange: any = () => {
  };

  onTouched: any = () => {
  };

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }
}
