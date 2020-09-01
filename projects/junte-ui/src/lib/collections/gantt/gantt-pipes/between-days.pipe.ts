import { Pipe, PipeTransform } from '@angular/core';
import { addDays, differenceInCalendarDays } from 'date-fns';

@Pipe({name: 'betweenDays'})
export class BetweenDaysPipe implements PipeTransform {
  transform(start: Date, end: Date): Date[] {
    const dates = [];
    const days = differenceInCalendarDays(end, start) + 1;
    for (let i = 0; i < days; i++) {
      dates.push(addDays(start, i));
    }
    return dates;
  }
}
