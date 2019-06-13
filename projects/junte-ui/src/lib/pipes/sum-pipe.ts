import {Pipe, PipeTransform, QueryList} from '@angular/core';
import {BarIndicatorComponent} from '../components/circle-bar/indicator/indicator.component';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {
  transform(index: number, indicators: any[]): number {
    return indicators.slice(0, index + 1).reduce((total, i) => total + i.value, 0);
  }
}
