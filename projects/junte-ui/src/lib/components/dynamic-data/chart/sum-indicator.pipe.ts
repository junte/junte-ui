import { Pipe, PipeTransform } from '@angular/core';
import { ChartIndicatorComponent } from './chart-indicator/chart-indicator.component';

@Pipe({
  name: 'sumIndicators'
})
export class SumIndicatorsPipe implements PipeTransform {
  transform(index: number, indicators: ChartIndicatorComponent[]): number {
    return indicators.slice(0, index + 1).reduce((total, i) => total + i.value, 0);
  }
}
