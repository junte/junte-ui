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
  QueryList, Renderer2,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { of, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, finalize, tap } from 'rxjs/operators';
import { SelectMode, Sizes, UI } from '../../../enums/ui';
import { IOption, Key, Options } from './model';

const MIN_WIDTH = 20;
const CHAR_WIDTH = 8;

@Component({
  selector: 'jnt-select-option',
  template: ''
})
export class SelectOptionComponent {

  ui = UI;

  @Input() icon: string;
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
    if (!opened) {
      this.queryControl.setValue('');
    }
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

  loading: boolean;

  @HostBinding('attr.mode')
  @Input() mode: SelectMode = SelectMode.single;

  @Input() labelField = 'label';
  @Input() keyField = 'key';
  @Input() placeholder = '';

  @Input()
  @HostBinding('attr.search')
  set search(search: boolean) {
    search ? this.queryControl.enable() : this.queryControl.disable();
  }

  get search() {
    return !this.queryControl.disabled;
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

  @ViewChild('selectedList', {static: true})
  selectedList: ElementRef<HTMLUListElement>;

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


  @Input()
  loader(q: string) {
    const options = Object.values(this.options.persisted);
    return of(options.filter(o => o.label.startsWith(q)));
  }

  constructor(private hostRef: ElementRef,
              private renderer: Renderer2,
              private fb: FormBuilder) {

  }

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
              this.options.found[key.toString()] = {key, label: o[this.labelField], icon: o.icon, value: o};
            }
          });
          this.changes.options++;
        });
    };

    this.queryControl.valueChanges.pipe(tap(query => {
        if (!!query) {
          this.loading = true;
        } else {
          this.loading = false;
          this.options.found = this.options.persisted;
          this.changes.options++;
        }

        const input = this.queryInput.nativeElement;
        if (!!query && query.length > 0) {
          const width = Math.max((query.length + 1) * CHAR_WIDTH, MIN_WIDTH);
          this.renderer.setStyle(input, 'width', width + 'px');
        } else {
          this.renderer.removeStyle(input, 'width');
        }
      }),
      debounceTime(SEARCH_DELAY),
      distinctUntilChanged(),
      filter(query => !!query))
      .subscribe(query => loadOptions(query));
  }

  ngAfterContentInit() {
    const convert = (options: SelectOptionComponent[]) => {
      this.options.persisted = {};
      options.forEach(({key, label, icon, value}) =>
        this.options.persisted[key.toString()] = {key, label, icon, value});
      this.changes.options++;
    };

    convert(this.optionsFromMarkup.toArray());
    this.optionsFromMarkup.changes.subscribe(options =>
      convert(options.toArray()));
  }

  fitInputWidth() {

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

  @HostListener('click', ['$event'])
  focused({target}: { target: HTMLElement, path: HTMLElement[] }) {
    switch (this.mode) {
      case SelectMode.single:
        break;
      case SelectMode.multiple:
        if (target === this.selectedList.nativeElement) {
          this.opened = true;
        }
        break;

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
