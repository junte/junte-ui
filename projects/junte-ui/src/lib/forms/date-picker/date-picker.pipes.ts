import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'styleTop'})
export class StyleTopPipe implements PipeTransform {
  transform(n: number): number {
    return (83 * Math.sin((6-n) / 6 * Math.PI))+90;
  }
}

@Pipe({name: 'styleLeft'})
export class StyleLeftPipe implements PipeTransform {
  transform(n: number): number {
    return (83 * Math.cos((6-n) / 6 * Math.PI))+90;
  }
}

@Pipe({name: 'timeFormat'})
export class TimeFormatPipe implements PipeTransform {
  transform(n: any): any {
    return n < 10 ? '0' + String(n) : n;
  }
}
