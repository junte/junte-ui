import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'includes', pure: false})
export class IncludesPipe implements PipeTransform {
  transform(arr: (string | number)[], val: string | number) {
    return !!arr && arr.includes(val);
  }
}
