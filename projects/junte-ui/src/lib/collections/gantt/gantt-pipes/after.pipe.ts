import { Pipe, PipeTransform } from '@angular/core';
import { getDate, getDaysInMonth, getMonth, getYear } from 'date-fns/esm';
import { getFullMonth } from './utils';

@Pipe({name: 'after'})
export class AfterPipe implements PipeTransform {
  transform(to: Date, current: Date): number {
    return getFullMonth(getYear(to), getMonth(to)) <= getFullMonth(getYear(current), getMonth(current))
      ? getDate(to) : getDaysInMonth(current);
  }
}
