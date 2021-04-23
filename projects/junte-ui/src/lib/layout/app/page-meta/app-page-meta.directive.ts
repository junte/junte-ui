import { Directive } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

function findLast(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
  let current = route;
  while (!!current.firstChild) {
    current = current.firstChild;
  }

  return current;
}

type PageMeta = {
  title?: string,
  description?: string
}

@Directive({
  selector: 'jnt-app-page-meta'
})
export class AppPageMetaDirective {

  private destroy$ = new Subject<any>();

  constructor(private router: Router,
              private titleService: Title,
              private metaService: Meta) {
  }

  ngOnInit() {
    this.build();
    this.router.events.pipe(
      takeUntil(this.destroy$),
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => this.build());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  build() {
    const root = this.router.routerState.snapshot.root;
    const snapshot: ActivatedRouteSnapshot = findLast(root).pathFromRoot
      .reverse()
      .find(route => !!route.data.meta);

    const routeMeta = snapshot?.data?.meta;
    let meta: PageMeta = {};

    if (!!routeMeta) {
      switch (typeof routeMeta) {
        case 'string': {
          meta.title = routeMeta;
          break;
        }
        case 'object': {
          meta = routeMeta;
          break;
        }
        case 'function': {
          meta = routeMeta(snapshot);
          break;
        }
        default:
          throw new Error(`wrong meta type: ${typeof meta}`);
      }

      if (!!meta.title) {
        this.titleService.setTitle(meta.title);
      }
      if (!!meta.description) {
        this.metaService.updateTag({name: 'description', content: meta.description});
      }
    }
  }
}
