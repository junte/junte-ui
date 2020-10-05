import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'includes', pure: false})
export class IncludesPipe implements PipeTransform {
  transform(arr: any[], val: any | any[]): boolean {
    const target = arr || [];
    if (Array.isArray(val)) {
      for (let i = 0; i < val.length; i++) {
        if (target.includes(val[i])) {
          return true;
        }
      }
      return false;
    }

    return target.includes(val);
  }
}
