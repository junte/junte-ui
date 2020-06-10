import { Pipe, PipeTransform } from '@angular/core';
import { addDays, getDaysInMonth, setDate } from 'date-fns/esm';

@Pipe({name: 'datesInMonth'})
export class DatesInMonthPipe implements PipeTransform {
  transform(date: Date): Date[] {
    const first = setDate(date, 1);
    const days = getDaysInMonth(date);
    const dates = [];
    for (let i = 0; i < days; i++) {
      dates.push(addDays(first, i));
    }
    return dates;
  }
}
