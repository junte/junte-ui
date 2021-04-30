import { Pipe, PipeTransform } from '@angular/core';
import endOfWeek from 'date-fns/endOfWeek';
import { JunteUIConfig } from '../../../config';

@Pipe({name: 'jntEndOfWeek'})
export class EndOfWeekPipe implements PipeTransform {

  constructor(private config: JunteUIConfig) {
  }

  transform(date: Date): Date {
    return endOfWeek(date, {
      locale: this.config.locale.dfns,
      weekStartsOn: this.config.weekStartsOn
    });
  }
}
