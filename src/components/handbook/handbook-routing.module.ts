import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadChildren } from 'src/utils/routing';
import { IndexComponent } from 'src/components/handbook/index/index.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'home',
    loadChildren: () => loadChildren(import('./home/home.module')
      .then(m => m.HomeModule))
  },
  {
    path: 'theming',
    loadChildren: () => loadChildren(import('./theming/theming.module')
      .then(m => m.ThemingModule))
  },
  {
    path: 'typography',
    loadChildren: () => loadChildren(import('./typography/typography.module')
      .then(m => m.TypographyModule))
  },
  {
    path: 'layout',
    loadChildren: () => loadChildren(import('./layout/layout-test.module')
      .then(m => m.LayoutTestModule))
  },
  {
    path: 'navigation',
    loadChildren: () => loadChildren(import('./navigation/navigation-test.module')
      .then(m => m.NavigationTestModule))
  },
  {
    path: 'ui-elements',
    loadChildren: () => loadChildren(import('./elements/elements-test.module')
      .then(m => m.ElementsTestModule))
  },
  {
    path: 'forms',
    loadChildren: () => loadChildren(import('./forms/forms-test.module')
      .then(m => m.FormsTestModule))
  },
  {
    path: 'collections',
    loadChildren: () => loadChildren(import('./collections/collections-test.module')
      .then(m => m.CollectionsTestModule))
  },
  {
    path: 'overlays',
    loadChildren: () => loadChildren(import('./overlays/overlays-test.module')
      .then(m => m.OverlaysTestModule))
  },
  {
    path: 'dynamic-data',
    loadChildren: () => loadChildren(import('./dynamic/dynamic-test.module')
      .then(m => m.DynamicTestModule))
  },
  {
    path: 'other',
    loadChildren: () => loadChildren(import('./other/other-test.module')
      .then(m => m.OtherTestModule))
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HandbookRoutingModule {

}
