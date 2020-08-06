import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({name: 'monthName'})
export class MonthNamePipe implements PipeTransform {
  transform(source: number): string {
    return format(new Date(0, source), 'MMM');
  }
}
