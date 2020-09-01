import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'pop'})
export class PopPipe implements PipeTransform {
  transform(source: any[]): any[] {
    return source.slice(0, -1);
  }
}
