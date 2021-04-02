import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbsTestComponent } from 'src/components/handbook/navigation/breadcrumbs/breadcrumbs-test.component';
import { BreadcrumbResolver } from 'src/components/handbook/navigation/breadcrumbs/resolver';
import { BreadCrumbTest1Component } from 'src/components/handbook/navigation/breadcrumbs/tests/test.component';
import { BreadCrumbTest2Component } from 'src/components/handbook/navigation/breadcrumbs/tests/test2.component';
import { BreadCrumbTest3Component } from 'src/components/handbook/navigation/breadcrumbs/tests/test3.component';

export function getLabel(data: any) {
  return data.obj.label;
}

export function getUrl(data: any) {
  return ['..', 'page-2-new', {id: 1}];
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
            path: 'page-2-new',
            component: BreadCrumbTest2Component,
          },
          {
            path: 'page-2',
            component: BreadCrumbTest2Component,
            data: {breadcrumb: {label: 'Second page', url: getUrl}},
            children: [
              {
                path: 'page-3',
                component: BreadCrumbTest3Component,
                data: {breadcrumb: 'Third page'}
              }
            ]
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
