import { Pipe, PipeTransform } from '@angular/core';
import { isEqual } from '../../core/utils/equal';

@Pipe({name: 'check'})
export class CheckSelectedPipe implements PipeTransform {
  transform(value: any, selected: any[], key: string, ..._versions: number[]): boolean {
    return (!!key
      ? selected.indexOf(value[key])
      : selected.findIndex(e => isEqual(e, value))) !== -1;
  }
}
