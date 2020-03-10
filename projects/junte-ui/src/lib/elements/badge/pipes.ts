import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'numberArray'})
export class NumberArrayPipe implements PipeTransform {
  transform(count: number, start: number = 0): number[] {
    return count > 0 ? [...Array(count).keys()].map(x => start ? x + start : x) : [];
  }
}
