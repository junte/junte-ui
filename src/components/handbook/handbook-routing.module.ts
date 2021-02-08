import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadChildren } from 'src/utils/routing';
import { HandbookComponent } from 'src/components/handbook/handbook.component';

export const routes: Routes = [
  {
    path: '',
    component: HandbookComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'handbook'
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
        loadChildren: () => loadChildren(import('src/components/handbook/index/index.module')
          .then(m => m.IndexModule))
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HandbookRoutingModule {
}
