import { Pipe, PipeTransform } from '@angular/core';
import { addMonths, format, getDate, getISOWeek, isEqual, subMonths } from 'date-fns';

interface FormatOptions {
  locale?: Object;
}

type DateFns = number | string | Date;

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
