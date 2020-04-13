import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'mockArray'})
export class MockArrayPipe implements PipeTransform {
  transform(count: number, start: number = 0): number[] {
    return count > 0 ? [...Array(count).keys()]
      .map(x => start ? x + start : x) : [];
  }
}

@Pipe({name: 'join'})
export class JoinPipe implements PipeTransform {
  transform(arr: any[], separator: string = ', '): string {
    return arr.join(separator);
  }
}

@Pipe({name: 'includes', pure: false})
export class IncludesPipe implements PipeTransform {
  transform(arr: (string | number)[], val: string | number) {
    return !!arr && arr.includes(val);
  }
}
