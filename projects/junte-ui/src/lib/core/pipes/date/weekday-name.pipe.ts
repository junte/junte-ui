import { Pipe, PipeTransform } from '@angular/core';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import endOfWeek from 'date-fns/endOfWeek';
import format from 'date-fns/format';
import startOfWeek from 'date-fns/startOfWeek';
import { JunteUIConfig } from '../../../config';

const formats = {
  x1: 'eeeee',
  x2: 'eeeeee',
  x3: 'eee',
  full: 'eeee'
};

/**
 * - `x1`: One char. 'M' for Monday.
 * - `x2`: Two chars. 'Mo' for Monday.
 * - `x3`: Three chars. 'Mon' for Monday.
 * - `full`: Full weekday name. 'Monday' for Monday.
 */
export type WeekdayNameFormat = keyof typeof formats;

@Pipe({name: 'jntWeekdayName'})
export class WeekdayNamePipe implements PipeTransform {

  constructor(private config: JunteUIConfig) {
  }

  transform(day: number, view: WeekdayNameFormat = 'full'): string {
    const options = {
      locale: this.config.locale.dfns,
      weekStartsOn: this.config.weekStartsOn
    };
    const now = new Date();
    const week = eachDayOfInterval({
      start: startOfWeek(now, options),
      end: endOfWeek(now, options)
    });
    return format(week[day], formats[view], options);
  }
}
