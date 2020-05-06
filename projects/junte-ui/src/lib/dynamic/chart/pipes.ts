import { Pipe, PipeTransform } from '@angular/core';
import { ChartIndicatorComponent } from './chart-indicator.component';

@Pipe({name: 'percentToNumber'})
export class PercentToNumberPipe implements PipeTransform {
  transform(percent: number, height: number): number {
    return (percent * height) / 100;
  }
}

@Pipe({name: 'sumIndicators'})
export class SumIndicatorsPipe implements PipeTransform {
  transform(index: number, indicators: ChartIndicatorComponent[]): number {
    return indicators.slice(0, index + 1).reduce((total, i) => total + i.value, 0);
  }
}
