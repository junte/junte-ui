import { Observable } from 'rxjs';

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
