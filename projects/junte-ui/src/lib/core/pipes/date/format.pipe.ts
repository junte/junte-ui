import { Pipe, PipeTransform, } from '@angular/core';
import format from 'date-fns/format';
import { JunteUIConfig } from '../../../config';

@Pipe({name: 'jntFormat'})
export class FormatPipe implements PipeTransform {

  constructor(private config: JunteUIConfig) {
  }

  transform(date: Date, dateFormat: string): string {
    return format(date, dateFormat, {
      locale: this.config.locale.dfns,
      weekStartsOn: this.config.weekStartsOn
    });
  }
}
