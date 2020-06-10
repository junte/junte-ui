import { Pipe, PipeTransform } from '@angular/core';
import { getMonth, getYear } from 'date-fns/esm';
import { getFullMonth } from './utils';

@Pipe({name: 'fullMonth'})
export class FullMonthPipe implements PipeTransform {
  transform(source: Date): number {
    return getFullMonth(getYear(source), getMonth(source));
  }
}
