import { EventEmitter, Injectable, NgZone } from '@angular/core';
import { Breakpoint } from '../../core/enums/breakpoint';

@Injectable()
export class BreakpointService {

  private queries = {
    [Breakpoint.mobile]: window.matchMedia(`(max-width: 768px)`),
    [Breakpoint.tablet]: window.matchMedia(`(min-width: 769px) and (max-width: 992px)`),
    [Breakpoint.desktop]: window.matchMedia(`(min-width: 993px) and (max-width: 1200px)`),
    [Breakpoint.wide]: window.matchMedia(`(min-width: 1201px)`)
  };

  current: Breakpoint = null;
  changed = new EventEmitter<Breakpoint>(null);

  constructor(zone: NgZone) {
    for (const i of Object.keys(this.queries)) {
      const breakpoint = i as Breakpoint;
      const query = this.queries[i];
      const checker = q => {
        if (q.matches) {
          zone.run(() => {
            this.current = breakpoint;
            this.changed.emit(breakpoint);
          });
        }
      };
      checker(query);
      query.addListener(q => checker(q));
    }
  }
}
