import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterState } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { PropertyApi } from '../../core/decorators/api';
import { AppAsideComponent } from '../../layout/app/aside/app-aside.component';
import { UI } from '../../core/enums/ui';

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

  ui = UI;

  private routerState$ = new BehaviorSubject<RouterState>(this.router.routerState);
  private subscriptions: Subscription[] = [];

  breadcrumbs: Breadcrumb[] = [];

  @HostBinding('attr.host')
  readonly host = 'jnt-breadcrumbs-host';

  @HostBinding('attr.data-with-aside')
  get withAside() {
    return !!this.aside;
  }

  @PropertyApi({
    description: 'Support burger button for mobile devices',
    type: 'AppAsideComponent'
  })
  @Input()
  aside: AppAsideComponent;

  constructor(public router: Router,
              private titleService: Title,
              private metaService: Meta) {
  }

  ngOnInit() {
    this.subscriptions.push(this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.routerState$.next(this.router.routerState)));

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
          (Array.isArray(breadcrumb) ? breadcrumb : [breadcrumb]).forEach(b => {
            if (typeof b === 'string') {
              if (!!b) {
                breadcrumbs.push(new Breadcrumb(route, b));
              }
            } else if (b !== null && typeof b === 'object') {
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
}
