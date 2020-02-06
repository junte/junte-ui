import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './documentation.component';

export const routes: Routes = [
  {
    path: '',
    component: DocumentationComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'general'
      },
      {
        path: 'general',
        loadChildren: () => import('./general/general.module').then(m => m.GeneralModule)
      },
      {
        path: 'layout',
        loadChildren: () => import('./layout/layout-test.module').then(m => m.LayoutTestModule)
      },
      {
        path: 'navigation',
        loadChildren: () => import('./navigation/navigation-test.module').then(m => m.NavigationTestModule)
      },
      {
        path: 'ui-elements',
        loadChildren: () => import('./elements/elements-test.module').then(m => m.ElementsTestModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./forms/forms-test.module').then(m => m.FormsTestModule)
      },
      {
        path: 'collections',
        loadChildren: () => import('./collections/collections-test.module').then(m => m.CollectionsTestModule)
      },
      {
        path: 'overlays',
        loadChildren: () => import('./overlays/overlays-test.module').then(m => m.OverlaysTestModule)
      },
      {
        path: 'dynamic-data',
        loadChildren: () => import('./dynamic/dynamic-test.module').then(m => m.DynamicTestModule)
      },
      {
        path: 'other',
        loadChildren: () => import('./other/other.module').then(m => m.OtherModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule {
}
