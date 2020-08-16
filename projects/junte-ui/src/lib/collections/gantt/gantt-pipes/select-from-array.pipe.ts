import { Pipe, PipeTransform } from '@angular/core';
import { getMonth } from 'date-fns';

@Pipe({name: 'datesInPeriod'})
export class DatesInPeriodPipe implements PipeTransform {
  transform(period: Date[], today: Date): Date[] {
    const current = getMonth(today);
    return period.filter(date => getMonth(date['from']) === current
      || getMonth(date['to']) === current
      || (getMonth(date['from']) < current && getMonth(date['to']) > current));
  }
}
