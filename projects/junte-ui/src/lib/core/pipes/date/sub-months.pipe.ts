import { Pipe, PipeTransform } from '@angular/core';
import { subMonths } from 'date-fns';

@Pipe({name: 'jntSubMonth'})
export class SubMonthsPipe implements PipeTransform {
  transform(date: Date, amount: number): Date {
    return subMonths(date, amount);
  }
}
