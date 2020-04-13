import { Pipe, PipeTransform } from '@angular/core';
import { getDate, getDaysInMonth, getMonth, getYear } from 'date-fns';

const MONTHS_IN_YEAR = 12;

export function getFullMonth(year: number, month: number) {
  return MONTHS_IN_YEAR * year + month;
}

@Pipe({name: 'fullMonth'})
export class FullMonthPipe implements PipeTransform {
  transform(source: Date): number {
    return getFullMonth(getYear(source), getMonth(source));
  }
}

@Pipe({name: 'before'})
export class BeforePipe implements PipeTransform {
  transform(from: Date, current: Date): number {
    return getFullMonth(getYear(from), getMonth(from)) >= getFullMonth(getYear(current), getMonth(current))
      ? getDate(from) : 1;
  }
}

@Pipe({name: 'after'})
export class AfterPipe implements PipeTransform {
  transform(to: Date, current: Date): number {
    return getFullMonth(getYear(to), getMonth(to)) <= getFullMonth(getYear(current), getMonth(current))
      ? getDate(to) : getDaysInMonth(current);
  }
}

