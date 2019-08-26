import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'mockArray'})
export class MockArrayPipe implements PipeTransform {
  transform(length: number): any[] {
    return new Array(length);
  }
}

@Pipe({name: 'numberArray'})
export class NumberArrayPipe implements PipeTransform {
  transform(count: number, start: number = 0): number[] {
    return count > 0 ? [...Array(count).keys()].map(x => start ? x + start : x) : [];
  }
}

@Pipe({name: 'join'})
export class JoinPipe implements PipeTransform {
  transform(arr: any[], field: string = null): string {
    return arr.map(el => !!field ? el[field] : el).join(', ');
  }
}
