import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

class Breadcrumb {
  public label = 'Page First';
}

@Injectable()
export class BreadcrumbResolver implements Resolve<Observable<Breadcrumb>> {
  constructor() {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Breadcrumb> {
    return of(new Breadcrumb());
  }
}
