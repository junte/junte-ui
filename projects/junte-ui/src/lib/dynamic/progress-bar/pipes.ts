import { Pipe, PipeTransform, QueryList } from '@angular/core';
import { ProgressLineComponent } from './line/progress-line.component';

@Pipe({name: 'getColor'})
export class GetColorPipe implements PipeTransform {
  transform(value: number, lines: QueryList<ProgressLineComponent>, color: string, ..._): string {
    const found = lines.toArray()
      .map(line => ({from: line.from, color: line.color}))
      .sort((a, b) => a.from < b.from ? 1 : -1)
      .find(line => line.from <= value);

    return found?.color || color;
  }
}
