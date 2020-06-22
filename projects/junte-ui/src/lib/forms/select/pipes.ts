import { Pipe, PipeTransform } from '@angular/core';
import { IOption, Key, Options } from './model';

@Pipe({name: 'getOptions'})
export class GetOptionsPipe implements PipeTransform {
  transform(options: { [key: string]: IOption }, selected: Key[], ..._versions: number[]): IOption[] {
    const values = Object.values(options)
      .filter(o => !selected.includes(o.key));
    values.sort((a, b) => a.index > b.index ? 1 : (a.index < b.index ? -1 : 0));
    return values;
  }
}

@Pipe({name: 'getOption'})
export class GetOptionPipe implements PipeTransform {
  transform(key: string, options: Options, ..._versions: number[]): IOption {
    return options.persisted[key];
  }
}
