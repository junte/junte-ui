import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadChildren } from 'src/utils/routing';
import { DocsComponent } from './docs.component';

export const routes: Routes = [
  {
    path: '',
    component: DocsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'components'
      },
      {
        path: 'docs',
        pathMatch: 'full',
        redirectTo: 'general'
      },
      {
        path: 'team',
        data: {breadcrumb: 'Team'},
        loadChildren: () => loadChildren(import('../team/team.module')
          .then(m => m.TeamModule))
      },
      {
        path: 'general',
        loadChildren: () => loadChildren(import('./general/general.module')
          .then(m => m.GeneralModule))
      },
      {
        path: 'components',
        data: {breadcrumb: 'Components', animation: 'Components'},
        loadChildren: () => loadChildren(import('./components/components.module')
          .then(m => m.ComponentsModule))
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule {
}
