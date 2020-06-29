import { Pipe, PipeTransform } from '@angular/core';
import { IOption, Options } from './model';

@Pipe({name: 'getOptions'})
export class GetOptionsPipe implements PipeTransform {
  transform(options: { [key: string]: IOption }, ..._versions: number[]): IOption[] {
    const values = Object.values(options);
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
