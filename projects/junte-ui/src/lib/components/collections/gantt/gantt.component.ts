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

  ui = UI;
  addMonths = addMonths;
  subMonths = subMonths;

  private _current: Date = new Date();

  @Input()
  title: string;

  @Input()
  loading = false;

  @ContentChild('toolsTemplate')
  toolsTemplate: TemplateRef<any>;

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
