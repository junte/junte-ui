import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadChildren } from 'src/utils/routing';
import { SiteComponent } from 'src/components/site/site.component';

export const routes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'handbook'
      },
      {
        path: 'handbook',
        data: {breadcrumb: 'Handbook', animation: 'Components'},
        loadChildren: () => loadChildren(import('../handbook/handbook.module')
          .then(m => m.HandbookModule))
      },
      {
        path: 'team',
        data: {breadcrumb: 'Team'},
        loadChildren: () => loadChildren(import('../team/team.module')
          .then(m => m.TeamModule))
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule {

}
