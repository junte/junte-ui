import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'empty'})
export class EmptyPipe implements PipeTransform {
  transform(str: string): string {
    return str || '—';
  }
}
