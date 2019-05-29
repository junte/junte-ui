import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbsTestComponent } from './breadcrumbs-test.component';
import { BreadCrumbTest1Component } from 'components/breadcrumbs/tests/test.component';
import { BreadCrumbTest2Component } from 'components/breadcrumbs/tests/test2.component';

const routes: Routes = [
  {
    path: '',
    component: BreadcrumbsTestComponent,
    children: [
      {
        path: 'page',
        component: BreadCrumbTest1Component,
        data: {breadcrumb: {label: 'Page First'}},
        children: [
          {
            path: 'page-2',
            component: BreadCrumbTest2Component,
            data: {breadcrumb: {label: 'Page Last'}}
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreadcrumbsRoutingModule {
}
