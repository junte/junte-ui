import { Component, ContentChild, ContentChildren, forwardRef, HostBinding, Input, QueryList, TemplateRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { addMonths, subMonths } from 'date-fns';
import { UI } from '../../../enums/ui';
import { today } from '../../forms/calendar/utils';
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

  private _current: Date = new Date();

  @Input()
  title = '';

  @Input()
  loading = false;

  @ContentChild('titleTemplate', {static: false})
  titleTemplate: TemplateRef<any>;

  @ContentChildren(GanttLineComponent)
  lines: QueryList<GanttLineComponent>;

  ui = UI;
  today = today();
  error: Error;

  addMonths = addMonths;
  subMonths = subMonths;

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
