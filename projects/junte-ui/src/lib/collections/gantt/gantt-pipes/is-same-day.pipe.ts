import { Pipe, PipeTransform } from '@angular/core';
import { isSameDay } from 'date-fns';

@Pipe({name: 'isSameDay'})
export class IsSameDayPipe implements PipeTransform {
  transform(date1: Date, date2: Date): boolean {
    return isSameDay(date1, date2);
  }
}
