import { Pipe, PipeTransform } from '@angular/core';
import isSameMonth from 'date-fns/isSameMonth';

@Pipe({name: 'jntIsSameMonth'})
export class IsSameMonthPipe implements PipeTransform {
  transform(dateLeft: Date, dateRight: Date): boolean {
    return isSameMonth(dateLeft, dateRight);
  }
}
