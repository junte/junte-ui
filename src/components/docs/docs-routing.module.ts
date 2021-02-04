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
        redirectTo: 'handbook'
      },
      {
        path: 'docs',
        pathMatch: 'full',
        redirectTo: 'handbook/general'
      },
      {
        path: 'team',
        data: {breadcrumb: 'Team'},
        loadChildren: () => loadChildren(import('../team/team.module')
          .then(m => m.TeamModule))
      },
      {
        path: 'handbook',
        data: {breadcrumb: 'Handbook', animation: 'Components'},
        loadChildren: () => loadChildren(import('./handbook/handbook.module')
          .then(m => m.HandbookModule))
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
