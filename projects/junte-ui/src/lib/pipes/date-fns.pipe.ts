import { Pipe, PipeTransform } from '@angular/core';
import {
  addDays,
  differenceInDays,
  getDate,
  getDaysInMonth,
  getMonth,
  getYear,
  isEqual,
  isSameMonth,
  isToday,
  isWeekend,
  setDate
} from 'date-fns';

type DateFns = number | Date;

const MONTHS_IN_YEAR = 12;

export function getFullMonth(year: number, month: number) {
  return MONTHS_IN_YEAR * year + month;
}

export function getDifference(date1: Date, date2: Date, base: string = 'days') {
  switch (base) {
    case 'days':
    default:
      return differenceInDays(date1, date2);
  }
}

@Pipe({name: 'isEqualDate'})
export class IsEqualDatePipe implements PipeTransform {
  transform(dateLeft: DateFns, dateRight: DateFns): boolean {
    return isEqual(dateLeft, dateRight);
  }
}

@Pipe({name: 'isSameMonth'})
export class IsSameMonthPipe implements PipeTransform {
  transform(date1: Date, date2: Date): boolean {
    return isSameMonth(date1, date2);
  }
}

@Pipe({name: 'isWeekend'})
export class IsWeekendPipe implements PipeTransform {
  transform(date: Date): boolean {
    return isWeekend(date);
  }
}

@Pipe({name: 'isToday'})
export class IsTodayPipe implements PipeTransform {
  transform(date: Date): boolean {
    return isToday(date);
  }
}

@Pipe({name: 'remnantDays'})
export class RemnantDayPipe implements PipeTransform {
  transform(from: Date, to: Date): number {
    const diff = getDifference(from, to);
    const remnant = getDifference(new Date(), to);
    return Math.min(diff, Math.max(remnant, 0));
  }
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

@Pipe({name: 'dateDiff'})
export class DateDiffPipe implements PipeTransform {
  transform(date1: Date, date2: Date, base: string = 'days'): number {
    const days = getDifference(date1, date2, base);
    return days + (days >= 0 ? 1 : -1);
  }
}

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
