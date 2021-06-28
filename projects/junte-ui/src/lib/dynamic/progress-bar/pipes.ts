import { Pipe, PipeTransform, QueryList } from '@angular/core';
import { ProgressLineDirective } from './line/progress-line.directive';

@Pipe({name: 'getColor', pure: false})
export class GetColorPipe implements PipeTransform {
  transform(value: number, lines: QueryList<ProgressLineDirective>, color: string): string {
    const found = lines.toArray()
      .map(line => ({from: line.from, color: line.color}))
      .sort((a, b) => a.from < b.from ? 1 : -1)
      .find(line => line.from <= value);

    return found?.color || color;
  }
}
