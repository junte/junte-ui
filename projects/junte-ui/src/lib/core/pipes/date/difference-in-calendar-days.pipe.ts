import { Pipe, PipeTransform } from '@angular/core';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';

@Pipe({name: 'jntDifferenceInCalendarDays'})
export class DifferenceInCalendarDaysPipe implements PipeTransform {
  transform(dateLeft: Date, dateRight: Date): number {
    return differenceInCalendarDays(dateLeft, dateRight);
  }
}
