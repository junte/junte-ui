import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Pipe({name: 'getUrl'})
export class GetUrlPipe implements PipeTransform {
  constructor(private router: Router) {
  }

  transform(snapshot: ActivatedRouteSnapshot, url: string[] | Object[] = []): string {
    const paths = snapshot.pathFromRoot
      .map(route => route.url.map(url => url.path).join('/'));

    const urls = url.filter(path => path !== '.');

    if(urls[0] === '..') {
      paths.pop();
    }

    return '/' + this.router.serializeUrl(this.router.createUrlTree([
      ...paths.filter(path => !!path),
      ...urls.filter(path => path !== '.' && path !== '..')
    ]));
  }
}
