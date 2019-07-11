import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'percentToNumber'})
export class PercentToNumberPipe implements PipeTransform {
  transform(percent: number, height: number): number {
    return (percent * height) / 100;
  }
}
