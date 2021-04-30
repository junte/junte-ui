import { Pipe, PipeTransform } from '@angular/core';
import { addYears } from 'date-fns';

@Pipe({name: 'jntAddYears'})
export class AddYearsPipe implements PipeTransform {
  transform(date: Date, amount: number): Date {
    return addYears(date, amount);
  }
}
