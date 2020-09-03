import {
  Component,
  ContentChild,
  ContentChildren,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  QueryList,
  TemplateRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { addMonths, addYears, subMonths, subYears } from 'date-fns';
import { NGXLogger } from 'ngx-logger';
import { ContentApi, PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';
import { today } from '../../forms/calendar/utils';
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
    }
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

  @PropertyApi({
    description: 'Type of gantt',
    type: 'ui.gantt.type.month | ui.gantt.type.year',
    default: GanttTypes.month,
  })
  @Input()
  type: GanttTypes = GanttTypes.month;

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
    selector: '#titleTemplate',
    description: 'title template'
  })
  @ContentChild('titleTemplate')
  titleTemplate: TemplateRef<any>;

  @ContentChildren(GanttLineComponent, {descendants: true})
  lines: QueryList<GanttLineComponent>;

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

  constructor(private logger: NGXLogger) {
  }

  writeValue(date: Date): void {
    this._current = date;
  }
}
