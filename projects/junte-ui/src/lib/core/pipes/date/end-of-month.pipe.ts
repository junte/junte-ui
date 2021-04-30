import { Pipe, PipeTransform } from '@angular/core';
import endOfMonth from 'date-fns/endOfMonth';

@Pipe({name: 'jntEndOfMonth'})
export class EndOfMonthPipe implements PipeTransform {
  transform(date: Date): Date {
    return endOfMonth(date);
  }
}
