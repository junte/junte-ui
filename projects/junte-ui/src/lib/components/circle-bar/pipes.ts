import {Pipe, PipeTransform, QueryList} from '@angular/core';
import {BarIndicatorComponent} from './indicator/indicator.component';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {
  transform(index: number, indicators: QueryList<BarIndicatorComponent>): number {
    return indicators.toArray().slice(0, index).reduce((total, i) => total + i.value, 0);
  }
}
