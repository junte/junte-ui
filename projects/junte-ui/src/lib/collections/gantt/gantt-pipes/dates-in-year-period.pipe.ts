import { Pipe, PipeTransform } from '@angular/core';
import { getYear } from 'date-fns';

@Pipe({name: 'datesInYearPeriod'})
export class DatesInYearPeriodPipe implements PipeTransform {
  transform(period: Date[], current: Date): Date[] {
    const year = getYear(current);
    return period.filter(date => getYear(date['from']) === year
      || getYear(date['to']) === year
      || (getYear(date['from']) < year && getYear(date['to']) > year));
  }
}
