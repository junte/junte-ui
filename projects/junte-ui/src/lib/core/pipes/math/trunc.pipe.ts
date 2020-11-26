import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'trunc'})
export class TruncPipe implements PipeTransform {
  transform(num: number): number {
    return Math.trunc(num);
  }
}
