import { Pipe, PipeTransform } from '@angular/core';
import { getMonth, getYear } from 'date-fns';

@Pipe({name: 'yearAfter'})
export class YearAfterPipe implements PipeTransform {
  transform(to: Date, current: Date): number {
    return getYear(to) <= getYear(current)
      ? getMonth(to) : 11;
  }
}
