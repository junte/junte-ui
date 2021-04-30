import { Pipe, PipeTransform } from '@angular/core';
import isThisMonth from 'date-fns/isThisMonth';

@Pipe({name: 'jntIsThisMonth'})
export class IsThisMonthPipe implements PipeTransform {
  transform(date: Date): boolean {
    return isThisMonth(date);
  }
}
