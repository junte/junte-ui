import { Pipe, PipeTransform } from '@angular/core';
import isToday from 'date-fns/isToday';

@Pipe({name: 'jntIsToday'})
export class IsTodayPipe implements PipeTransform {
  transform(date: Date): boolean {
    return isToday(date);
  }
}
