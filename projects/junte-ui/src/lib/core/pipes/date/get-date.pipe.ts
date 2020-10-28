import { Pipe, PipeTransform } from '@angular/core';
import getDate from 'date-fns/getDate';

@Pipe({name: 'jntGetDate'})
export class GetDatePipe implements PipeTransform {
  transform(date: Date): number {
    return getDate(date);
  }
}
