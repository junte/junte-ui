import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { of, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, finalize, tap } from 'rxjs/operators';
import { SelectMode, Sizes, UI } from '../../enum/ui';
import { IOption, Key, Options } from './model';

@Component({
  selector: 'jnt-select-option',
  template: ''
})
export class SelectOptionComponent {

  @Input() key: Key;
  @Input() label: string;
  @Input() value: any;

}

const SEARCH_DELAY = 100;

@Component({
  selector: 'jnt-select',
  templateUrl: './select.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements OnInit, AfterContentInit, ControlValueAccessor {

  @HostBinding('attr.host') readonly host = 'jnt-select-host';

  private _opened = false;

  ui = UI;
  selectMode = SelectMode;

  options: Options = {persisted: {}, found: {}};
  selected: Key[] = [];

  @HostBinding('attr.opened')
  set opened(opened: boolean) {
    this._opened = opened;
    const input = this.queryInput.nativeElement;
    const checking = () => {
      const style = getComputedStyle(input);
      if (style.display !== 'none') {
        if (opened) {
          input.focus();
        }
      } else {
        setTimeout(() => checking(), 100);
      }
    };
    setTimeout(() => checking(), 100);
  }

  get opened() {
    return this._opened;
  }

  focused: boolean;
  loading: boolean;

  @HostBinding('attr.mode')
  @Input() mode: SelectMode = SelectMode.single;

  @Input() labelField = 'label';
  @Input() keyField = 'key';
  @Input() placeholder = '';

  @Input() set search(search: boolean) {
    search ? this.queryControl.enable() : this.queryControl.disable();
  }

  @Input() required = false;

  @HostBinding('attr.disabled')
  @Input()
  disabled = false;

  @HostBinding('attr.size')
  @Input()
  size: Sizes = Sizes.normal;

  @HostBinding('attr.label')
  @Input()
  label: string;

  @HostBinding('attr.allow-empty')
  @Input()
  allowEmpty = true;

  @ViewChild('queryInput', {static: true})
  queryInput: ElementRef<HTMLInputElement>;

  @HostBinding('attr.empty')
  get empty() {
    return this.selected.length === 0;
  }

  @ContentChildren(SelectOptionComponent) optionsFromMarkup: QueryList<SelectOptionComponent>;

  @ViewChild('query', {static: false})
  query: ElementRef<HTMLInputElement>;

  @ContentChild('optionTemplate', {static: false})
  optionTemplate: TemplateRef<any>;

  changes = {selected: 0, options: 0};

  private fetcher: Subscription;

  queryControl = this.fb.control({value: null, disabled: true});
  form = this.fb.group(
    {
      query: this.queryControl
    }
  );

  ngOnInit() {
    const loadOptions = (query: string) => {
      if (this.fetcher) {
        this.fetcher.unsubscribe();
      }
      this.fetcher = this.loader(query)
        .pipe(finalize(() => this.loading = false))
        .subscribe(objects => {
          this.options.found = {};
          objects.forEach(o => {
            const key = o[this.keyField];
            if (!!key) {
              this.options.found[key.toString()] = {key, label: o[this.labelField], value: o};
            }
          });
          this.changes.options++;
        });
    };

    this.form.valueChanges.pipe(tap(({query}) => {
        if (!!query) {
          this.loading = true;
        } else {
          this.loading = false;
          this.options.found = this.options.persisted;
          this.changes.options++;
        }
      }),
      debounceTime(SEARCH_DELAY),
      distinctUntilChanged(),
      filter(({query}) => !!query))
      .subscribe(({query}) => loadOptions(query));
  }

  constructor(private hostRef: ElementRef,
              private fb: FormBuilder) {

  }

  @Input()
  loader(q: string) {
    const options = Object.values(this.options.persisted);
    return of(options.filter(o => o.label.startsWith(q)));
  }

  ngAfterContentInit() {
    const convert = (options: SelectOptionComponent[]) => {
      this.options.persisted = {};
      options.forEach(({key, label, value}) =>
        this.options.persisted[key.toString()] = {label, key, value});
      this.changes.options++;
    };

    convert(this.optionsFromMarkup.toArray());
    this.optionsFromMarkup.changes.subscribe(options =>
      convert(options.toArray()));
  }

  select(option: IOption) {
    this.options.persisted[option.key.toString()] = option;
    this.changes.options++;
    this.queryControl.setValue(null);
    if (this.mode === SelectMode.multiple) {
      this.selected.push(option.key);
    } else {
      this.selected = [option.key];
    }
    this.opened = false;
    this.onChange(this.mode === SelectMode.multiple ? this.selected : option.key);
  }

  remove(key: Key) {
    const index = this.selected.findIndex(i => i === key);
    if (index !== -1) {
      this.selected.splice(index, 1);
      this.changes.selected++;
      this.onChange(this.mode === SelectMode.multiple ? this.selected : null);
    }
  }

  @HostListener('document:click', ['$event'])
  outside(e: { path: HTMLElement[] }) {
    if (this.opened && e.path.indexOf(this.hostRef.nativeElement) === -1) {
      this.close();
    }
  }

  @HostListener('blur')
  close() {
    this.opened = false;
  }

  writeValue(value: Key) {
    this.selected = !!value ? Array.isArray(value) ? value : [value] : [];
  }

  onChange(value: Key | Key[]) {
    // will be overridden
  }

  onTouched() {
    // will be overridden
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }
}
