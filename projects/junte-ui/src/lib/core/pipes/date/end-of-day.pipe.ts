import { Pipe, PipeTransform } from '@angular/core';
import endOfDay from 'date-fns/endOfDay';

@Pipe({name: 'jntEndOfDay'})
export class EndOfDayPipe implements PipeTransform {
  transform(date: Date): Date {
    return endOfDay(date);
  }
}
