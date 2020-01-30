import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'mockArray'})
export class MockArrayPipe implements PipeTransform {
  transform(length: number, start: number = 0): number[] {
    return Array.apply(null, Array(length)).map((v, i) => i + start);
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

@Pipe({name: 'includes'})
export class IncludesPipe implements PipeTransform {
  transform(items: (string | number)[], item: string | number) {
    return !!items && items.includes(item);
  }
}
