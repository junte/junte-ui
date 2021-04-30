import { Pipe, PipeTransform } from '@angular/core';
import startOfWeek from 'date-fns/startOfWeek';
import { JunteUIConfig } from '../../../config';

@Pipe({name: 'jntStartOfWeek'})
export class StartOfWeekPipe implements PipeTransform {

  constructor(private config: JunteUIConfig) {
  }

  transform(date: Date): Date {
    return startOfWeek(date, {
      locale: this.config.locale.dfns,
      weekStartsOn: this.config.weekStartsOn
    });
  }
}
