import { Pipe, PipeTransform } from '@angular/core';
import isEqual from 'date-fns/isEqual';

@Pipe({name: 'jntIsEqual'})
export class IsEqualPipe implements PipeTransform {
  transform(dateLeft: Date, dateRight: Date): boolean {
    return isEqual(dateLeft, dateRight);
  }
}
