import { Pipe, PipeTransform } from '@angular/core';
import {
  addMonths,
  differenceInDays,
  format,
  getDate,
  getDaysInMonth,
  getISOWeek,
  getMonth,
  getYear,
  isEqual,
  isSameMonth,
  isSameYear,
  subMonths
} from 'date-fns';

interface FormatOptions {
  locale?: Object;
}

type DateFns = number | string | Date;

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

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {
  transform(date: DateFns, f?: string, o?: FormatOptions): string {
    return format(date, f, o);
  }
}

@Pipe({
  name: 'getISOWeek'
})
export class GetISOWeekPipe implements PipeTransform {
  transform(date: DateFns): number {
    return getISOWeek(date);
  }
}

@Pipe({
  name: 'addMonths'
})
export class AddMonthsPipe implements PipeTransform {
  transform(date: DateFns, amount: number): Date {
    return addMonths(date, amount);
  }
}

@Pipe({
  name: 'subMonths'
})
export class SubMonthsPipe implements PipeTransform {
  transform(date: DateFns, amount: number): Date {
    return subMonths(date, amount);
  }
}

@Pipe({
  name: 'getDate'
})
export class GetDatePipe implements PipeTransform {
  transform(date: DateFns): number {
    return getDate(date);
  }
}

@Pipe({
  name: 'isEqual'
})
export class IsEqualPipe implements PipeTransform {
  transform(dateLeft: DateFns, dateRight: DateFns): boolean {
    return isEqual(dateLeft, dateRight);
  }
}

@Pipe({
  name: 'isSameMonth'
})
export class IsSameMonthPipe implements PipeTransform {
  transform(date1: Date, date2: Date): boolean {
    return isSameMonth(date1, date2);
  }
}

@Pipe({
  name: 'getDaysInMonth'
})
export class GetDaysInMonthPipe implements PipeTransform {
  transform(date: Date): number {
    return getDaysInMonth(date);
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

@Pipe({name: 'same'})
export class SamePipe implements PipeTransform {
  transform(date: Date, current: Date): boolean {
    return isSameMonth(date, current) && isSameYear(date, current);
  }
}

@Pipe({name: 'dateDiff'})
export class DateDiffPipe implements PipeTransform {
  transform(date1: Date, date2: Date, base: string = 'days'): number {
    return getDifference(date1, date2, base);
  }
}

@Pipe({name: 'diffDays'})
export class DiffDayPipe implements PipeTransform {
  transform(from: Date, to: Date): number {
    return getDifference(from, to);
  }
}
