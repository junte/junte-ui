import { Observable, Subject } from 'rxjs';

export function untilJSONChanged() {
  return function (source: Observable<any>) {
    let prev = null;
    return new Observable(observer => {
      return source.subscribe({
        next(x) {
          if (JSON.stringify(x) !== JSON.stringify(prev)) {
            prev = x;
            observer.next(x);
          }
        },
        error(err) {
          observer.error(err);
        },
        complete() {
          observer.complete();
        }
      });
    });
  };
}

export function progress(indicator: Subject<boolean>) {
  indicator.next(true);
  return function <T>(source: Observable<T>): Observable<T> {
    return new Observable(observer => {
      return source.subscribe({
        next(value) {
          indicator.next(false);
          observer.next(value);
        },
        error(error) {
          indicator.next(false);
          observer.error(error);
        },
        complete() {
          observer.complete();
        }
      });
    });
  };
}
