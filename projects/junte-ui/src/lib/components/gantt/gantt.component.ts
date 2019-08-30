import { Component, ContentChildren, forwardRef, HostBinding, Input, QueryList } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { addMonths, subMonths } from 'date-fns';
import { UI } from '../../enum/ui';
import { today } from '../calendar/utils';
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

  private _current: Date;

  @Input() loading = false;

  @HostBinding('attr.host') readonly host = 'jnt-gantt-host';

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
