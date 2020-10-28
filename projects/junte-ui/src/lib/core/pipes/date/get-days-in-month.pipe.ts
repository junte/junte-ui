import { Pipe, PipeTransform } from '@angular/core';
import getDaysInMonth from 'date-fns/getDaysInMonth';

@Pipe({name: 'jntGetDaysInMonth'})
export class GetDaysInMonthPipe implements PipeTransform {
  transform(date: Date): number {
    return getDaysInMonth(date);
  }
}
