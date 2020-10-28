import { Pipe, PipeTransform } from '@angular/core';
import isWeekend from 'date-fns/isWeekend';

@Pipe({name: 'jntIsWeekend'})
export class IsWeekendPipe implements PipeTransform {
  transform(date: Date): boolean {
    return isWeekend(date);
  }
}
