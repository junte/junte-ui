import { Pipe, PipeTransform } from '@angular/core';
import min from 'date-fns/min';

@Pipe({name: 'jntMin'})
export class MinPipe implements PipeTransform {
  transform(dates: Date[]): Date {
    return min(dates);
  }
}
