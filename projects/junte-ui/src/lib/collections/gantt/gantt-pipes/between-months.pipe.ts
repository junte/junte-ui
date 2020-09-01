import { Pipe, PipeTransform } from '@angular/core';
import { addMonths, differenceInCalendarMonths } from 'date-fns';

@Pipe({name: 'betweenMonths'})
export class BetweenMonthsPipe implements PipeTransform {
  transform(start: Date, end: Date): Date[] {
    const dates = [];
    const months = differenceInCalendarMonths(end, start) + 1;
    for (let i = 0; i < months; i++) {
      dates.push(addMonths(start, i));
    }
    return dates;
  }
}
