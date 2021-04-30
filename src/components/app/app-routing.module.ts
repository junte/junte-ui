import { NgModule } from '@angular/core';
import { PreloadingStrategy, Route, RouterModule, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';
import { PRELOADING_DELAY } from 'src/consts';
import { loadChildren } from 'src/utils/routing';

export class DelayedModulePreloading implements PreloadingStrategy {
  preloadedModules: string[] = [];

  preload(route: Route, load: () => Observable<boolean>): Observable<boolean> {
    this.preloadedModules.push(route.path);
    return of(true).pipe(delay(PRELOADING_DELAY), mergeMap(() => load()));
  }
}


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    data: {breadcrumb: 'Home'},
    loadChildren: () => loadChildren(import('../home/home.module')
      .then(m => m.HomeModule))
  },
  {
    path: '',
    data: {breadcrumb: 'Junte UI'},
    loadChildren: () => loadChildren(import('../site/site.module')
      .then(m => m.SiteModule))
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: DelayedModulePreloading,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
    initialNavigation: 'enabled'
  })],
  providers: [DelayedModulePreloading],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
