import { NgModule } from '@angular/core';
import { PreloadingStrategy, Route, RouterModule, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';
import { loadChildren } from 'src/utils/routing';

const PRELOADING_DELAY = 15000;

export function docsMatcher() {
  return {consumed: []};
}

export class DelayedModulePreloading implements PreloadingStrategy {
  preloadedModules: string[] = [];

  preload(route: Route, load: () => Observable<boolean>): Observable<boolean> {
    if (route.data && route.data['preload']) {
      // console.log(`preload module ${route.path}`);
      this.preloadedModules.push(route.path);
      return of(true).pipe(
        delay(PRELOADING_DELAY),
        mergeMap(() => load()));
    } else {
      return of(null);
    }
  }
}


const routes: Routes = [
  {
    path: '',
    data: {breadcrumb: 'Home', preload: true},
    loadChildren: () => loadChildren(import('../home/home.module')
      .then(m => m.HomeModule))
  },
  {
    matcher: docsMatcher,
    data: {breadcrumb: 'Junte UI', preload: true},
    loadChildren: () => loadChildren(import('../docs/docs.module')
      .then(m => m.DocsModule))
  },
  {
    path: '**',
    redirectTo: '/'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: DelayedModulePreloading,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64]
  })],
  providers: [DelayedModulePreloading],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
