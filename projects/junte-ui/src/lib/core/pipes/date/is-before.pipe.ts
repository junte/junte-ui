import { Pipe, PipeTransform } from '@angular/core';
import isBefore from 'date-fns/isBefore';

@Pipe({name: 'jntIsBefore'})
export class IsBeforePipe implements PipeTransform {
  transform(date: Date, dateToCompare: Date): boolean {
    return isBefore(date, dateToCompare);
  }
}
