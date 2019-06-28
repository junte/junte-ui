import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbsTestComponent } from './breadcrumbs-test.component';
import { BreadcrumbResolver } from 'src/components/documentation/breadcrumbs/resolver';
import { BreadCrumbTest1Component } from './tests/test.component';
import { BreadCrumbTest2Component } from './tests/test2.component';

export function getLabel(data: any) {
  return data.obj.label;
}

const routes: Routes = [
  {
    path: '',
    component: BreadcrumbsTestComponent,
    data: {breadcrumb: 'Home'},
    children: [
      {
        path: 'page',
        component: BreadCrumbTest1Component,
        data: {breadcrumb: getLabel},
        resolve: {obj: BreadcrumbResolver},
        children: [
          {
            path: 'page-2',
            component: BreadCrumbTest2Component,
            data: {breadcrumb: 'Page Last'}
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
