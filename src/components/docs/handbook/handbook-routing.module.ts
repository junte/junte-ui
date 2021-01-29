import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadChildren } from 'src/utils/routing';
import { HandbookComponent } from 'src/components/docs/handbook/handbook.component';

export const routes: Routes = [
  {
    path: '',
    component: HandbookComponent
  },
  {
    path: 'layout',
    loadChildren: () => loadChildren(import('../layout/layout-test.module')
      .then(m => m.LayoutTestModule))
  },
  {
    path: 'navigation',
    loadChildren: () => loadChildren(import('../navigation/navigation-test.module')
      .then(m => m.NavigationTestModule))
  },
  {
    path: 'ui-elements',
    loadChildren: () => loadChildren(import('../elements/elements-test.module')
      .then(m => m.ElementsTestModule))
  },
  {
    path: 'forms',
    loadChildren: () => loadChildren(import('../forms/forms-test.module')
      .then(m => m.FormsTestModule))
  },
  {
    path: 'collections',
    loadChildren: () => loadChildren(import('../collections/collections-test.module')
      .then(m => m.CollectionsTestModule))
  },
  {
    path: 'overlays',
    loadChildren: () => loadChildren(import('../overlays/overlays-test.module')
      .then(m => m.OverlaysTestModule))
  },
  {
    path: 'dynamic-data',
    loadChildren: () => loadChildren(import('../dynamic/dynamic-test.module')
      .then(m => m.DynamicTestModule))
  },
  {
    path: 'other',
    loadChildren: () => loadChildren(import('../other/other.module')
      .then(m => m.OtherModule))
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HandbookRoutingModule {
}
