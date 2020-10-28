import { Pipe, PipeTransform } from '@angular/core';
import endOfYear from 'date-fns/endOfYear';

@Pipe({name: 'jntEndOfYear'})
export class EndOfYearPipe implements PipeTransform {
  transform(date: Date): Date {
    return endOfYear(date);
  }
}
