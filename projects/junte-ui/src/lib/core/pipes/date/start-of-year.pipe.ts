import { Pipe, PipeTransform } from '@angular/core';
import startOfYear from 'date-fns/startOfYear';

@Pipe({name: 'jntStartOfYear'})
export class StartOfYearPipe implements PipeTransform {
  transform(date: Date): Date {
    return startOfYear(date);
  }
}
