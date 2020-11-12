import { Pipe, PipeTransform } from '@angular/core';
import isThisYear from 'date-fns/isThisYear';

@Pipe({name: 'jntIsThisYear'})
export class IsThisYearPipe implements PipeTransform {
  transform(date: Date): boolean {
    return isThisYear(date);
  }
}
