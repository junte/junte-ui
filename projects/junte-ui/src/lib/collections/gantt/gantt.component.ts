import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  QueryList,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { addMonths, addYears, subMonths, subYears } from 'date-fns';
import { NGXLogger } from 'ngx-logger';
import { delay, filter, map } from 'rxjs/operators';
import { LOGGER_PROVIDERS } from '../../core/logger/providers';
import { ContentApi, PropertyApi } from '../../core/decorators/api';
import { Breakpoint } from '../../core/enums/breakpoint';
import { UI } from '../../core/enums/ui';
import { Width } from '../../core/enums/width';
import { today } from '../../forms/calendar/utils';
import { BreakpointService } from '../../layout/responsive/breakpoint.service';
import { GanttTypes } from './enums';
import { GanttLineComponent } from './gantt-line/gantt-line.component';

@Component({
  selector: 'jnt-gantt',
  templateUrl: './gantt.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GanttComponent),
      multi: true
    },
    ...LOGGER_PROVIDERS
  ]
})
export class GanttComponent implements ControlValueAccessor {

  @HostBinding('attr.host') readonly host = 'jnt-gantt-host';

  ui = UI;
  addMonths = addMonths;
  subMonths = subMonths;
  addYears = addYears;
  subYears = subYears;
  types = GanttTypes;

  private _current: Date = new Date();
  private _width: Width = Width.fluid;

  get mobile() {
    return this.breakpoint.current === Breakpoint.mobile;
  }

  @PropertyApi({
    description: 'Type of gantt',
    type: 'ui.gantt.type.month | ui.gantt.type.year',
    default: GanttTypes.month,
  })
  @Input()
  type: GanttTypes = GanttTypes.month;

  @PropertyApi({
    description: 'Card width',
    path: 'ui.width',
    default: Width.fluid,
    options: [Width.default,
      Width.fluid]
  })
  @HostBinding('attr.data-width')
  @Input()
  set width(width: Width) {
    this._width = width || Width.fluid;
  }

  get width() {
    return this._width;
  }

  @PropertyApi({
    description: 'Title',
    type: 'string',
    default: 'Test title',
  })
  @Input()
  title: string;

  @PropertyApi({
    description: 'Loading',
    type: 'boolean',
    default: 'false',
  })
  @Input()
  loading = false;

  @ContentApi({
    selector: '#toolsTemplate',
    description: 'Tools template'
  })
  @ContentChild('toolsTemplate')
  toolsTemplate: TemplateRef<any>;

  @ContentApi({
    selector: '#ganttTitleTemplate',
    description: 'title template'
  })
  @ContentChild('ganttTitleTemplate')
  titleTemplate: TemplateRef<any>;

  @ContentChildren(GanttLineComponent, {descendants: true})
  lines: QueryList<GanttLineComponent>;

  @ViewChildren('calendarDay')
  calendarDays: QueryList<ElementRef>;

  @ViewChild('currentLine')
  currentLine: ElementRef;

  today = today();
  error: Error;

  onChange: (date: Date) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  get current() {
    return this._current;
  }

  set current(current: Date) {
    this._current = current;
    this.onChange(current);
  }

  constructor(private logger: NGXLogger,
              private breakpoint: BreakpointService,
              private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.calendarDays.changes.pipe(
      delay(0),
      filter(() => !!this.currentLine && this.breakpoint.current !== Breakpoint.mobile),
      map(days => ({days, line: this.currentLine.nativeElement}))
    ).subscribe(({days, line}) => {
      const day = days.find(day => day.nativeElement.attributes['data-current'].value === 'true');
      if (!!day) {
        this.renderer.setStyle(line, 'display', 'block');
        this.renderer.setStyle(line, 'left',
          `${day.nativeElement.offsetLeft + (day.nativeElement.offsetWidth / 2) - 2}px`);
      }
    });
  }

  writeValue(date: Date): void {
    this._current = date;
  }
}
