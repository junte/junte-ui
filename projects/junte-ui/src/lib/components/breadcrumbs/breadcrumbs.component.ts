import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterState } from '@angular/router';
import { isArray, isObject, isString } from 'util';
import { Meta, Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { BehaviorSubject, Subscription } from 'rxjs';
import { UI } from '../../enum/ui';

class Breadcrumb {
  constructor(public route: ActivatedRoute,
              public title = null,
              public url = '.') {
  }
}

@Component({
  selector: 'jnt-breadcrumb',
  templateUrl: './breadcrumbs.encapsulated.html'
})

export class BreadcrumbsComponent implements OnInit, OnDestroy {

  @HostBinding('attr.host') readonly host = 'jnt-breadcrumb-host';

  ui = UI;

  private routerState$: BehaviorSubject<RouterState> = new BehaviorSubject<RouterState>(null);
  private subscriptions: Subscription[] = [];

  breadcrumbs: Breadcrumb[];

  private set routerState(routerState: RouterState) {
    this.routerState$.next(routerState);
  }

  private get routerState() {
    return this.routerState$.getValue();
  }

  constructor(private router: Router,
              private titleService: Title,
              private metaService: Meta) {
  }

  ngOnInit() {
    this.routerState = this.router.routerState;

    this.subscriptions.push(this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => this.routerState = this.router.routerState));

    this.routerState$.pipe(filter(r => !!r))
      .subscribe((router) => this.build(router.root));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  build(router: ActivatedRoute) {
    let route = router;
    const breadcrumbs = [];
    while (route) {
      if (route.routeConfig && route.routeConfig.data) {
        if (route.routeConfig.data.breadcrumb) {
          const breadcrumb = route.routeConfig.data.breadcrumb;
          (isArray(breadcrumb) ? breadcrumb : [breadcrumb]).forEach(b => {
            if (isString(b)) {
              if (!!b) {
                breadcrumbs.push(new Breadcrumb(route, b));
              }
            } else if (isObject(b)) {
              const title = b.label;
              if (!!title) {
                breadcrumbs.push(new Breadcrumb(route, title, b.url));
              }
            } else {
              const title = b(route.snapshot.data);
              if (!!title) {
                breadcrumbs.push(new Breadcrumb(route, title, '.'));
              }
            }
          });
        }
      }

      route = route.firstChild;
    }
    this.breadcrumbs = breadcrumbs;

    const metaTitle = this.breadcrumbs.map(crumb => crumb.title).join(' · ');
    this.titleService.setTitle(metaTitle);
    this.metaService.updateTag({name: 'description', content: metaTitle});
  }

  go(crumb: Breadcrumb) {
    this.router.navigate([crumb.url], {relativeTo: crumb.route});
  }
}
