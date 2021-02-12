import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, finalize, takeWhile, tap } from 'rxjs/operators';
import { LOGGER_PROVIDERS } from '../../core/logger/providers';
import { DeviceService } from '../../layout/responsive/device.service';
import { PropertyApi } from '../../core/decorators/api';
import { Behaviour } from '../../core/enums/behaviour';
import { Breakpoint } from '../../core/enums/breakpoint';
import { Feature } from '../../core/enums/feature';
import { Placement } from '../../core/enums/placement';
import { Size } from '../../core/enums/size';
import { State } from '../../core/enums/state';
import { UI } from '../../core/enums/ui';
import { Width } from '../../core/enums/width';
import { BreakpointService } from '../../layout/responsive/breakpoint.service';
import { PopoverInstance, PopoverService } from '../../overlays/popover/popover.service';
import { SelectMode } from './enums';
import { IOption, Key, Options } from './model';

const MIN_WIDTH = 20;
const CHAR_WIDTH = 8;
const CHECKING_INTERVAL = 100;

@Component({
  selector: 'jnt-select-option',
  template: ''
})
export class SelectOptionComponent {

  ui = UI;

  @PropertyApi({
    description: 'Icon for select option',
    type: 'string'
  })
  @Input()
  icon: string;

  @PropertyApi({
    description: 'Key for select option',
    type: 'number | string'
  })
  @Input()
  key: Key;

  @PropertyApi({
    description: 'Label name for select option',
    type: 'string'
  })
  @Input()
  label: string;

  @PropertyApi({
    description: 'Value for select option',
    type: 'any'
  })
  @Input()
  value: any;

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
    },
    ...LOGGER_PROVIDERS
  ]
})
export class SelectComponent implements OnInit, AfterContentInit, OnDestroy, ControlValueAccessor {

  @HostBinding('attr.host')
  readonly host = 'jnt-select-host';

  private reference: { popover: PopoverInstance } = {popover: null};
  private destroyed = false;
  private _features: Feature[] = [];

  ui = UI;

  get mobile() {
    return this.breakpoint.current === Breakpoint.mobile;
  }

  private fetcher: Subscription;
  private _placement: Placement = Placement.absolute;

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
  @Input()
  labelField = 'label';

  @PropertyApi({
    description: 'Select key field',
    type: 'string',
    default: 'key'
  })
  @Input()
  keyField = 'key';

  @PropertyApi({
    description: 'Group field',
    type: 'string',
    default: 'null'
  })
  @Input()
  groupField = null;

  @PropertyApi({
    description: 'Group field key',
    type: 'string',
    default: 'null'
  })
  @Input()
  groupFieldKey = null;

  @PropertyApi({
    description: 'Select placeholder',
    type: 'string'
  })
  @Input()
  placeholder = '';

  @PropertyApi({
    description: 'Select required',
    type: 'boolean',
    default: 'false'
  })
  @Input()
  required = false;

  @HostBinding('attr.data-mode')
  _mode: SelectMode = SelectMode.single;

  @HostBinding('attr.data-size')
  _size: Size = Size.normal;

  @HostBinding('attr.data-width')
  _width: Width = Width.default;

  @PropertyApi({
    description: 'Select label',
    type: 'string'
  })
  @Input()
  label: string;

  @PropertyApi({
    description: 'Icon for select',
    type: 'string',
  })
  @Input()
  icon: string;

  @PropertyApi({
    description: 'Select state',
    path: 'ui.state',
    options: [State.loading]
  })
  @HostBinding('attr.data-state')
  @Input()
  state: State;

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

  @PropertyApi({
    description: 'Template for options header',
    type: 'TemplateRef<any>'
  })
  @Input()
  optionsHeaderTemplate: TemplateRef<any>;

  @ContentChildren(SelectOptionComponent)
  optionsFromMarkup: QueryList<SelectOptionComponent>;

  @ViewChild('optionsTemplate')
  optionsTemplate: TemplateRef<any>;

  @Input()
  groupTemplate: TemplateRef<any>;

  @PropertyApi({
    description: 'Selected value',
    type: '(selected)='
  })
  @Output('selected')
  updated = new EventEmitter<any>();

  @HostBinding('attr.data-opened')
  opened = false;

  @PropertyApi({
    description: 'Menu popover placement',
    path: 'ui.placement',
    default: Placement.absolute,
    options: [Placement.absolute, Placement.fixed]
  })
  @Input()
  set placement(placement: Placement) {
    this._placement = placement || Placement.absolute;
  }

  get placement() {
    return this._placement;
  }

  @PropertyApi({
    description: 'Select mode',
    path: 'ui.select.mode',
    default: SelectMode.single,
    options: [SelectMode.single, SelectMode.multiple]
  })
  @Input()
  set mode(mode: SelectMode) {
    this._mode = mode || SelectMode.single;
  }

  get mode() {
    return this._mode;
  }

  @PropertyApi({
    description: 'Select features',
    path: 'ui.feature',
    options: [Feature.search, Feature.multiplex, Feature.allowEmpty]
  })
  @HostBinding('attr.data-features')
  @Input()
  set features(features: Feature[]) {
    this._features = features || [];
    this.features.includes(Feature.search)
      ? this.queryControl.enable({emitEvent: false})
      : this.queryControl.disable({emitEvent: false});
  }

  get features() {
    return this._features;
  }

  @HostBinding('attr.data-disabled')
  @Input()
  disabled = false;

  @PropertyApi({
    description: 'Select size',
    path: 'ui.size',
    default: Size.normal,
    options: [Size.tiny, Size.small, Size.normal, Size.large]
  })
  @Input()
  set size(size: Size) {
    this._size = size || Size.normal;
  }

  @PropertyApi({
    description: 'Select width',
    path: 'ui.width',
    default: Width.default,
    options: [Width.default, Width.fluid]
  })
  @Input() set width(width: Width) {
    this._width = width || Width.default;
  }

  @HostBinding('attr.data-empty')
  get empty() {
    return this.selected.length === 0;
  }

  @PropertyApi({
    description: 'Select loader',
    type: 'function'
  })
  @Input()
  loader: (query: string) => Observable<(Object & { icon: string })[]> = null;

  @PropertyApi({
    description: 'Select creator',
    type: 'function'
  })
  @Input()
  creator: (query: string, close: Function) => Observable<null> | null = null;

  @ViewChild('queryRef')
  queryRef: ElementRef<HTMLInputElement>;

  @ViewChild('selectedRef')
  selectedRef: ElementRef<HTMLUListElement>;

  @ViewChild('layoutRef', {read: ElementRef})
  layoutRef: ElementRef<HTMLElement>;

  @ViewChild('iconRef', {read: ElementRef, static: false})
  iconRef: ElementRef;

  onChange: (value: Key | Key[]) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;

  constructor(private hostRef: ElementRef,
              private renderer: Renderer2,
              private fb: FormBuilder,
              private popover: PopoverService,
              private logger: NGXLogger,
              private breakpoint: BreakpointService,
              public device: DeviceService) {
  }

  ngOnInit() {
    const loadOptions = (query: string) => {
      if (!!this.fetcher) {
        this.fetcher.unsubscribe();
      }

      if (!!this.loader) {
        this.fetcher = this.loader(query)
          .pipe(finalize(() => this.loading = false))
          .subscribe(objects => {
            this.options.found = {};
            objects.forEach((o, index) => {
              const key = o[this.keyField];
              if (!!key) {
                this.options.found[`${key}`] = {
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
      } else {
        this.options.found = {};
        let options = Object.values(this.options.persisted);
        options = options.filter(o => o.label.toLocaleLowerCase()
          .includes(query.toLocaleLowerCase()));
        options.forEach(option => this.options.found[option.key] = option);
        this.changes.options++;
      }
    };

    this.queryControl.valueChanges.pipe(distinctUntilChanged(),
      tap(query => {
        this.logger.debug('query has been changed');
        this.loading = !!query && !!this.loader;
        const input = this.queryRef.nativeElement;
        if (!!query && query.length > 0) {
          const width = Math.max((query.length + 1) * CHAR_WIDTH, MIN_WIDTH);
          this.renderer.setStyle(input, 'width', width + 'px');
        } else {
          this.renderer.removeStyle(input, 'width');
        }
      }),
      debounceTime(SEARCH_DELAY),
      filter(query => !!query)
    ).subscribe(query => loadOptions(query));
  }

  ngAfterContentInit() {
    const convert = (options: SelectOptionComponent[]) => {
      this.options.persisted = {};
      options.forEach(({key, label, icon, value}, index) =>
        this.options.persisted[`${key}`] = {index, key, label, icon, value});
      this.changes.options++;
    };

    convert(this.optionsFromMarkup.toArray());
    this.optionsFromMarkup.changes.pipe(tap(() => this.logger.debug('options from markup changed')))
      .subscribe(options => convert(options.toArray()));
  }

  ngOnDestroy() {
    this.destroyed = true;
    if (!!this.reference.popover) {
      this.reference.popover.hide();
      this.reference.popover = null;
    }
  }

  @HostListener('document:click', ['$event.path'])
  onClickOutside(path: HTMLElement[]) {
    const picked = (elements: HTMLElement[]) => elements.indexOf(this.hostRef.nativeElement) !== -1;
    if (!!this.reference.popover && this.opened && !picked(path) && !this.reference.popover.picked(path)) {
      this.close();
    }
  }

  @HostListener('click', ['$event'])
  onFocus({target}: { target: HTMLElement, path: HTMLElement[] }) {
    switch (this.mode) {
      case SelectMode.single:
        break;
      case SelectMode.multiple:
        if (target === this.selectedRef.nativeElement) {
          this.opened ? this.close() : this.open();
        }
        break;
    }
  }

  @HostListener('blur')
  onBlur() {
    this.onTouched();
  }

  @HostListener('click', ['$event'])
  onClick({target}: { target: HTMLElement }) {
    // TODO: think about iconRef
    const elements = [
      this.layoutRef.nativeElement,
      this.selectedRef.nativeElement,
      this.iconRef?.nativeElement
    ];
    if (elements.includes(target)) {
      this.open();
    }
  }

  trackOption(index: number, option: IOption) {
    return option.key || index;
  }

  toggle(option: IOption) {
    this.selected.indexOf(option.key) === -1
      ? this.select(option) : this.remove(option.key);
  }

  select(option: IOption) {
    this.logger.debug('option is selected');
    this.options.persisted[`${option.key}`] = option;
    this.changes.options++;
    if (this.mode === SelectMode.multiple) {
      this.selected.push(option.key);
      if (!!this.reference.popover) {
        this.reference.popover.update();
      }
    } else {
      this.selected = [option.key];
    }

    if (this.mode !== SelectMode.multiple || !this.features.includes(Feature.multiplex)) {
      this.close();
    }
    this.onChange(this.mode === SelectMode.multiple ? this.selected : option.key);
    this.updated.emit(option.value);
  }

  remove(key: Key) {
    const index = this.selected.findIndex(i => i === key);
    if (index !== -1 && (this.mode === SelectMode.multiple || this.features.includes(Feature.allowEmpty))) {
      this.logger.debug(`option ${index} has been removed`);
      this.selected.splice(index, 1);
      this.changes.selected++;
      this.onChange(this.mode === SelectMode.multiple ? this.selected : null);
    }
  }

  open() {
    this.opened = true;
    const input = this.queryRef.nativeElement;
    const checking = () => {
      const style = getComputedStyle(input);
      if (style.display !== 'none') {
        input.focus();
      } else {
        setTimeout(() => checking(), CHECKING_INTERVAL);
      }
    };
    setTimeout(() => checking(), CHECKING_INTERVAL);
    if (!this.mobile) {
      this.reference.popover = this.popover.show(this.hostRef, {
        contentTemplate: this.optionsTemplate,
        behaviour: Behaviour.dropdown,
        placement: this.placement,
        padding: UI.gutter.small
      });
      this.popover.attached.pipe(takeWhile((() => !this.destroyed)), filter(t => !!t && t !== this.hostRef))
        .subscribe(() => this.close());
    }
  }

  close() {
    this.opened = false;
    this.queryControl.setValue(null);
    if (!!this.reference.popover) {
      this.reference.popover.hide();
      this.reference.popover = null;
    }
  }

  writeValue(value: Key | Key[]) {
    if (this.mode === SelectMode.multiple && !Array.isArray(value)) {
      throw new Error('Wrong value form multiple select mode');
    }

    this.selected = (this.mode === SelectMode.single ? (!!value ? [value] : []) : value) as Key[];
  }

  createOption(query, event: KeyboardEvent) {
    if (!!query && event.key === 'Enter' && !!this.creator) {
      const complete = this.creator(query, this.close.bind(this));
      if (!!complete) {
        complete.subscribe(() => this.queryControl.setValue(null));
      }
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}
