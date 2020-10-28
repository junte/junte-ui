import { Pipe, PipeTransform } from '@angular/core';
import isAfter from 'date-fns/isAfter';

@Pipe({name: 'jntIsAfter'})
export class IsAfterPipe implements PipeTransform {
  transform(date: Date, dateToCompare: Date): boolean {
    return isAfter(date, dateToCompare);
  }
}
