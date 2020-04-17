import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadChildren } from '../../utils/routing';

export function docsMatcher() {
  return {consumed: []};
}

const routes: Routes = [
  {
    path: '',
    data: {breadcrumb: 'Home'},
    loadChildren: () => loadChildren(import('../home/home.module')
      .then(m => m.HomeModule))
  },
  {
    matcher: docsMatcher,
    data: {breadcrumb: 'Junte UI'},
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
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
