import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbsTestComponent } from 'src/components/docs/navigation/breadcrumbs/breadcrumbs-test.component';
import { BreadcrumbResolver } from 'src/components/docs/navigation/breadcrumbs/resolver';
import { BreadCrumbTest1Component } from 'src/components/docs/navigation/breadcrumbs/tests/test.component';
import { BreadCrumbTest2Component } from 'src/components/docs/navigation/breadcrumbs/tests/test2.component';
import { BreadCrumbTest3Component } from 'src/components/docs/navigation/breadcrumbs/tests/test3.component';

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
            data: {breadcrumb: 'Second page'},
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
