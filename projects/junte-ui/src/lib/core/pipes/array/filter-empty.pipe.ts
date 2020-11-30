import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterEmpty'})
export class FilterEmptyPipe implements PipeTransform {
  transform(arr: any[]): any[] {
    return arr.filter(item => item !== null);
  }
}
