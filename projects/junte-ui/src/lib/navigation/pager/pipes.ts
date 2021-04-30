import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatLinkPipe'})
export class FormatLinkPipe implements PipeTransform {
  transform(format: string, page: number): string {
    return format.replace('{{page}}', `${page}`);
  }
}
