import { Pipe, PipeTransform } from '@angular/core';
import isSameYear from 'date-fns/isSameYear';

@Pipe({name: 'jntIsSameYear'})
export class IsSameYearPipe implements PipeTransform {
  transform(dateLeft: Date, dateRight: Date): boolean {
    return isSameYear(dateLeft, dateRight);
  }
}
