import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

@Pipe({name: 'getUrl'})
export class GetUrlPipe implements PipeTransform {
  transform(snapshot: ActivatedRouteSnapshot): string {
    return '/' + snapshot.pathFromRoot
      .map(route => route.url.map(url => url.path).join('/'))
      .filter(path => !!path).join('/');
  }
}
