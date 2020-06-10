import { Pipe, PipeTransform } from '@angular/core';
import { getMonth, getYear } from 'date-fns/esm';

@Pipe({name: 'yearBefore'})
export class YearBeforePipe implements PipeTransform {
  transform(from: Date, current: Date): number {
    return getYear(from) >= getYear(current)
      ? getMonth(from) : 0;
  }
}
