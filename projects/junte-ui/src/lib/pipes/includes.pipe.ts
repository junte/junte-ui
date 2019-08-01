import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'includes'})
export class IncludesPipe implements PipeTransform {
  transform(items: string[], item: string) {
    return !!items && items.includes(item);
  }
}
