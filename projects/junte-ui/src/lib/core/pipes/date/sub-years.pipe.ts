import { Pipe, PipeTransform } from '@angular/core';
import { subYears } from 'date-fns';

@Pipe({name: 'jntSubYears'})
export class SubYearsPipe implements PipeTransform {
  transform(date: Date, amount: number): Date {
    return subYears(date, amount);
  }
}
