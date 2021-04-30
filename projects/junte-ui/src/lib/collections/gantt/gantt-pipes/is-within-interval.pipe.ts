import { Pipe, PipeTransform } from '@angular/core';
import { isWithinInterval } from 'date-fns';

@Pipe({name: 'isWithinInterval'})
export class IsWithinIntervalPipe implements PipeTransform {
  transform(date: Date, startPeriod: Date, endPeriod: Date): boolean {
    const start = startPeriod;
    const end = endPeriod;
    return isWithinInterval(date, { start, end });
  }
}
