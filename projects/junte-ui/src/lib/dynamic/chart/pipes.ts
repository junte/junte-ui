import { Pipe, PipeTransform, QueryList } from '@angular/core';
import { ChartIndicatorDirective } from './chart-indicator.directive';

@Pipe({name: 'percentToNumber'})
export class PercentToNumberPipe implements PipeTransform {
  transform(percent: number, height: number): number {
    return (percent * height) / 100;
  }
}

@Pipe({name: 'sumIndicators'})
export class SumIndicatorsPipe implements PipeTransform {
  transform(index: number, indicators: QueryList<ChartIndicatorDirective>): number {
    return indicators.toArray().slice(0, index + 1)
      .reduce((total, i) => total + i.value, 0);
  }
}
