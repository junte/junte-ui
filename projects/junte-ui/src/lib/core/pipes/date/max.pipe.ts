import { Pipe, PipeTransform } from '@angular/core';
import max from 'date-fns/max';

@Pipe({name: 'jntMax'})
export class MaxPipe implements PipeTransform {
  transform(dates: Date[]): Date {
    return max(dates);
  }
}
