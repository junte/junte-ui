import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from 'util';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {
  transform(index: number, indicators: any): number {
    const inds = isArray(indicators) ? indicators : indicators.toArray();
    return inds.slice(0, index + 1).reduce((total, i) => total + i.value, 0);
  }
}
