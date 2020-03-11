import { Component, ContentChild, ContentChildren, forwardRef, HostBinding, Input, QueryList, TemplateRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { addMonths, subMonths } from 'date-fns';
import { UI } from '../../core/enums/ui';
import { today } from '../../forms/calendar/utils';
import { GanttLineComponent } from './gantt-line/gantt-line.component';
import { ContentApi, PropertyApi } from '../../core/decorators/api';

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

  private _current: Date = new Date();

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

  get current() {
    return this._current;
  }

  set current(current: Date) {
    this._current = current;
    this.onChange(current);
  }

  writeValue(date: Date): void {
    this._current = date;
  }

  onChange(date: Date) {
  }

  registerOnChange(fn): void {
    this.onChange = fn;
  }

  registerOnTouched(fn): void {
  }
}
