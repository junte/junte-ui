import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  QueryList,
  Renderer2,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { of, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, finalize, tap } from 'rxjs/operators';
import { PropertyApi } from '../../core/decorators/api';
import { Size } from '../../core/enums/size';
import { UI } from '../../core/enums/ui';
import { SelectMode } from './enums';
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

  ui = UI;
  selectMode = SelectMode;

  private _opened = false;
  private fetcher: Subscription;

  options: Options = {persisted: {}, found: {}};
  changes = {selected: 0, options: 0};
  selected: Key[] = [];
  loading: boolean;

  queryControl = this.fb.control({value: null, disabled: true});
  form = this.fb.group(
    {
      query: this.queryControl
    }
  );

  @PropertyApi({
    description: 'Select label field',
    type: 'string',
    default: 'label'
  })
  @Input() labelField = 'label';

  @PropertyApi({
    description: 'Select key field',
    type: 'string',
    default: 'key'
  })
  @Input() keyField = 'key';

  @PropertyApi({
    description: 'Select placeholder',
    type: 'string',
    default: 'key'
  })
  @Input() placeholder = '';

  @PropertyApi({
    description: 'Select required',
    type: 'boolean',
    default: 'false'
  })
  @Input() required = false;

  @HostBinding('attr.data-mode')
  _mode: SelectMode = SelectMode.single;

  @HostBinding('attr.data-size')
  _size: Size = Size.normal;

  @PropertyApi({
    description: 'Select label',
    type: 'string'
  })
  @Input() label: string;

  @PropertyApi({
    description: 'Select allow empty',
    type: 'boolean',
    default: 'true'
  })
  @HostBinding('attr.data-allow-empty')
  @Input() allowEmpty = true;

  @PropertyApi({
    description: 'Icon for select',
    type: 'string',
  })
  @Input() icon: string;

  @ViewChild('queryInput', {static: true})
  queryInput: ElementRef<HTMLInputElement>;

  @ViewChild('selectedList', {static: true})
  selectedList: ElementRef<HTMLUListElement>;

  @ViewChild('query')
  query: ElementRef<HTMLInputElement>;

  @PropertyApi({
    description: 'Template for option',
    type: 'TemplateRef<any>'
  })
  @Input()
  optionTemplate: TemplateRef<any>;

  @PropertyApi({
    description: 'Template for empty options',
    type: 'TemplateRef<any>'
  })
  @Input()
  emptyOptionsTemplate: TemplateRef<any>;

  @ContentChildren(SelectOptionComponent)
  optionsFromMarkup: QueryList<SelectOptionComponent>;

  @HostBinding('attr.data-opened')
  set opened(opened: boolean) {
    this._opened = opened;
    if (!opened) {
      this.queryControl.setValue(null);
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

  @PropertyApi({
    description: 'Select mode',
    path: 'ui.select',
    default: SelectMode.single,
    options: [SelectMode.single, SelectMode.multiple]
  })
  @Input() set mode(mode: SelectMode) {
    this._mode = mode || SelectMode.single;
  }

  get mode() {
    return this._mode;
  }

  @PropertyApi({
    description: 'Select search',
    type: 'boolean'
  })
  @HostBinding('attr.data-search')
  @Input() set search(search: boolean) {
    search ? this.queryControl.enable() : this.queryControl.disable();
  }

  get search() {
    return !this.queryControl.disabled;
  }

  @HostBinding('attr.data-disabled')
  @Input()
  disabled = false;

  @PropertyApi({
    description: 'Select size',
    path: 'ui.sizes',
    default: Size.normal,
    options: [Size.tiny, Size.small, Size.normal, Size.large]
  })
  @Input() set size(size: Size) {
    this._size = size || Size.normal;
  }

  @HostBinding('attr.data-empty')
  get empty() {
    return this.selected.length === 0;
  }

  @PropertyApi({
    description: 'Select loader',
    type: 'function'
  })
  @Input() loader(q: string) {
    const options = Object.values(this.options.persisted);
    return of(options.filter(o => o.label.startsWith(q)));
  }

  constructor(private hostRef: ElementRef,
              private renderer: Renderer2,
              private fb: FormBuilder,
              private logger: NGXLogger) {
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
          objects.forEach((o, index) => {
            const key = o[this.keyField];
            if (!!key) {
              this.options.found[key.toString()] = {
                index,
                key,
                label: o[this.labelField],
                icon: o.icon,
                value: o
              };
            }
          });
          this.changes.options++;
        });
    };

    this.queryControl.valueChanges.pipe(distinctUntilChanged(),
      tap(query => {
        this.logger.debug('query has been changed');
        this.loading = !!query;
        const input = this.queryInput.nativeElement;
        if (!!query && query.length > 0) {
          const width = Math.max((query.length + 1) * CHAR_WIDTH, MIN_WIDTH);
          this.renderer.setStyle(input, 'width', width + 'px');
        } else {
          this.renderer.removeStyle(input, 'width');
        }
      }),
      debounceTime(SEARCH_DELAY),
      filter(query => !!query))
      .subscribe(query => loadOptions(query));
  }

  ngAfterContentInit() {
    const convert = (options: SelectOptionComponent[]) => {
      this.options.persisted = {};
      options.forEach(({key, label, icon, value}, index) =>
        this.options.persisted[key.toString()] = {index, key, label, icon, value});
      this.changes.options++;
    };

    convert(this.optionsFromMarkup.toArray());
    this.optionsFromMarkup.changes.pipe(tap(() => this.logger.debug('options from markup changed')))
      .subscribe(options => convert(options.toArray()));
  }

  trackOption(option: IOption) {
    return option.key;
  }

  select(option: IOption) {
    this.logger.debug('option is selected');
    this.options.persisted[option.key.toString()] = option;
    this.changes.options++;
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
      this.logger.debug('option has been removed');
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

  writeValue(value: Key | Key[]) {
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

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}
