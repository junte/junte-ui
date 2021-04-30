import { Pipe, PipeTransform } from '@angular/core';
import startOfMonth from 'date-fns/startOfMonth';

@Pipe({name: 'jntStartOfMonth'})
export class StartOfMonthPipe implements PipeTransform {
  transform(date: Date): Date {
    return startOfMonth(date);
  }
}
