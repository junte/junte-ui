import { Pipe, PipeTransform, } from '@angular/core';
import formatDistance from 'date-fns/formatDistance';
import { JunteUIConfig } from '../../../config';

@Pipe({name: 'jntFormatDistance'})
export class FormatDistancePipe implements PipeTransform {

  constructor(private config: JunteUIConfig) {
  }

  transform(start: Date, end: Date): string {
    return formatDistance(start, end, {
      includeSeconds: false,
      addSuffix: false,
      locale: this.config.locale.dfns
    });
  }
}
