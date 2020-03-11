import { Pipe, PipeTransform } from '@angular/core';
import { isEqual } from '../utils/equal';

@Pipe({name: 'isEqual'})
export class IsEqualPipe implements PipeTransform {
  transform(obj: any, obj2: any): boolean {
    return isEqual(obj, obj2);
  }
}
