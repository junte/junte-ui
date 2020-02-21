import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export function docsMatcher() {
  return {consumed: []};
}

const routes: Routes = [
  {
    path: '',
    data: {breadcrumb: 'Home'},
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  },
  {
    matcher: docsMatcher,
    data: {breadcrumb: 'Junte UI'},
    loadChildren: () => import('../documentation/documentation.module').then(m => m.DocumentationModule)
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
