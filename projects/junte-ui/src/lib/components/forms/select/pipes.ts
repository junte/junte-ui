import { Pipe, PipeTransform } from '@angular/core';
import { IOption, Key, Options } from './model';

@Pipe({name: 'getOptions'})
export class GetOptionsPipe implements PipeTransform {
  transform(options: { [key: string]: IOption }, selected: Key[], ...versions: number[]) {
    return Object.values(options).filter(o => !selected.includes(o.key));
  }
}

@Pipe({name: 'getOption'})
export class GetOptionPipe implements PipeTransform {
  transform(key: string, options: Options, ...versions: number[]) {
    return options.persisted[key];
  }
}
