import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterState } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { PropertyApi } from '../../core/decorators/api';
import { Feature } from '../../core/enums/feature';
import { FlexWrap } from '../../core/enums/flex';
import { UI } from '../../core/enums/ui';
import { AppAsideComponent } from '../../layout/app/aside/app-aside.component';

class Breadcrumb {

  route: ActivatedRoute;
  title = null;
  disabled = false;
  url = ['.'];

  constructor(defs = null) {
    Object.assign(this, defs);
  }
}

// TODO: Remove jnt-breadcrumb!
@Component({
  selector: 'jnt-breadcrumb, jnt-breadcrumbs',
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

  @Input()
  @HostBinding('attr.data-wrap')
  wrap: FlexWrap = FlexWrap.wrap;

  @HostBinding('style.display')
  get display() {
    return this.breadcrumbs.length > 1 ? 'flex' : 'none';
  }

  @PropertyApi({
    description: 'Support burger button for mobile devices',
    type: 'AppAsideComponent'
  })
  @Input()
  aside: AppAsideComponent;

  @PropertyApi({
    description: 'Set page title based on breadcrumb title',
    path: 'ui.feature',
    options: [Feature.pageTitle]
  })
  @Input()
  features: Feature[] = [Feature.pageTitle];

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
          (Array.isArray(breadcrumb) ? breadcrumb : [breadcrumb])
            .filter(crumb => !!crumb)
            .forEach(crumb => {
              switch (typeof crumb) {
                case 'string': {
                  breadcrumbs.push(new Breadcrumb({route, title: crumb}));
                  break;
                }
                case 'object': {
                  const title = typeof crumb.label === 'string'
                    ? crumb.label : crumb.label(route.snapshot.data, route.snapshot);
                  let url = ['.'];
                  if (!!crumb.url) {
                    url = Array.isArray(crumb.url)
                      ? crumb.url : crumb.url(route.snapshot.data, route.snapshot);
                  }
                  if (!!title) {
                    breadcrumbs.push(new Breadcrumb({
                      route,
                      title,
                      url,
                      disabled: crumb.disabled
                    }));
                  }
                  break;
                }
                case 'function': {
                  const title = crumb(route.snapshot.data, route.snapshot);
                  if (!!title) {
                    breadcrumbs.push(new Breadcrumb({route, title}));
                  }
                  break;
                }
                default:
                  throw new Error(`wrong breadcrumb type: ${typeof crumb}`);
              }
            });
        }
      }

      route = route.firstChild;
    }
    this.breadcrumbs = breadcrumbs;

    const metaTitle = this.breadcrumbs.map(crumb => crumb.title).join(' · ');
    if (this.features.includes(UI.feature.pageTitle)) {
      this.titleService.setTitle(metaTitle);
      this.metaService.updateTag({name: 'description', content: metaTitle});
    }
  }

  go(crumb: Breadcrumb, event: MouseEvent) {
    event.preventDefault();
    this.router.navigate(crumb.url, {relativeTo: crumb.route})
      .then();
  }
}
