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

  ui = UI;

  options: Options = {persisted: {}, found: {}};
  selected: Key[] = [];

  opened = false;
  focused: boolean;
  loading: boolean;

  @HostBinding('attr.mode')
  @Input() mode: SelectMode = UI.select.single;

  @Input() labelField = 'label';
  @Input() keyField = 'key';
  @Input() placeholder: string;

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

  @ContentChildren(SelectOptionComponent) optionsFromMarkup: QueryList<SelectOptionComponent>;

  @ViewChild('query', {static: false})
  query: ElementRef<HTMLInputElement>;

  @Input()
  @ContentChild('optionTemplate', {static: false})
  optionTemplate: TemplateRef<any>;

  changes = {selected: 0, options: 0};

  private fetcher: Subscription;

  queryControl = this.fb.control(null);
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

  add(option: IOption) {
    this.options.persisted[option.key.toString()] = option;
    this.changes.options++;
    this.selected.push(option.key);
    this.queryControl.setValue(null);
  }

  remove(key: Key) {
    const index = this.selected.findIndex(i => i === key);
    if (index !== -1) {
      this.selected.splice(index, 1);
      this.changes.selected++;
      this.onChange(this.selected);
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
