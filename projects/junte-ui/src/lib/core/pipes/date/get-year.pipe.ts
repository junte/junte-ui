import { Pipe, PipeTransform } from '@angular/core';
import { getYear } from 'date-fns';

@Pipe({name: 'jntGetYear'})
export class GetYearPipe implements PipeTransform {
  transform(date: Date): number {
    return getYear(date);
  }
}
