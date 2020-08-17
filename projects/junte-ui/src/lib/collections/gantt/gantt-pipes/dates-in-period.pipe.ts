import { Pipe, PipeTransform } from '@angular/core';
import { getMonth } from 'date-fns';

@Pipe({name: 'datesInPeriod'})
export class DatesInPeriodPipe implements PipeTransform {
  transform(period: Date[], current: Date): Date[] {
    const month = getMonth(current);
    return period.filter(date => getMonth(date['from']) === month
      || getMonth(date['to']) === month
      || (getMonth(date['from']) < month && getMonth(date['to']) > month));
  }
}
