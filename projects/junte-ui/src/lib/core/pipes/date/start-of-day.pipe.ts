import { Pipe, PipeTransform } from '@angular/core';
import startOfDay from 'date-fns/startOfDay';

@Pipe({name: 'jntStartOfDay'})
export class StartOfDayPipe implements PipeTransform {
  transform(date: Date): Date {
    return startOfDay(date);
  }
}
