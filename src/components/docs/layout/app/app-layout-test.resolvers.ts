import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppLayoutResolver implements Resolve<Observable<any>> {
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return of(null).pipe(delay(1000));
  }
}
