import { Pipe, PipeTransform } from '@angular/core';
import { getDate, getMonth, getYear } from 'date-fns/esm';
import { getFullMonth } from './utils';

@Pipe({name: 'before'})
export class BeforePipe implements PipeTransform {
  transform(from: Date, current: Date): number {
    return getFullMonth(getYear(from), getMonth(from)) >= getFullMonth(getYear(current), getMonth(current))
      ? getDate(from) : 1;
  }
}
