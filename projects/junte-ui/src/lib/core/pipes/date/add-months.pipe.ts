import { Pipe, PipeTransform } from '@angular/core';
import { addMonths } from 'date-fns';

@Pipe({name: 'jntAddMonth'})
export class AddMonthsPipe implements PipeTransform {
  transform(date: Date, amount: number): Date {
    return addMonths(date, amount);
  }
}
