import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsTestModule } from 'src/components/docs/collections/collections-test.module';
import { AppLayoutTestComponent } from 'src/components/docs/layout/app/app-layout-test.component';
import { BlockTestComponent } from 'src/components/docs/layout/block/block-test.component';
import { CollapsibleTestComponent } from 'src/components/docs/layout/collapsible/collapsible-test.component';
import { GridTestComponent } from 'src/components/docs/layout/grid/grid-test.component';
import { InformerTestComponent } from 'src/components/docs/layout/informer/informer-test.component';
import { ResponsiveTestComponent } from 'src/components/docs/layout/responsive/responsive-test.component';
import { SkeletonTestComponent } from 'src/components/docs/layout/skeleton/skeleton-test.component';
import { SpinnerTestComponent } from 'src/components/docs/layout/spinner/spinner-test.component';
import { StackTestComponent } from 'src/components/docs/layout/stack/stack-test.component';

export const routes: Routes = [
  {
    path: 'grid',
    component: GridTestComponent,
    data: {breadcrumb: 'Grid', animation: 'Grid'}
  },
  {
    path: 'stack',
    component: StackTestComponent,
    data: {breadcrumb: 'Stack', animation: 'Stack'}
  },
  {
    path: 'block',
    component: BlockTestComponent,
    data: {breadcrumb: 'Block', animation: 'Block'}
  },
  {
    path: 'responsive',
    component: ResponsiveTestComponent,
    data: {breadcrumb: 'Responsive', animation: 'Responsive'}
  },
  {
    path: 'spinner',
    component: SpinnerTestComponent,
    data: {breadcrumb: 'Spinner', animation: 'Spinner'}
  },
  {
    path: 'application',
    component: AppLayoutTestComponent,
    data: {breadcrumb: 'Application', animation: 'Application'}
  },
  {
    path: 'skeleton',
    component: SkeletonTestComponent,
    data: {breadcrumb: 'Skeleton', animation: 'Skeleton'}
  },
  {
    path: 'informer',
    component: InformerTestComponent,
    data: {breadcrumb: 'Informer', animation: 'Informer'}
  },
  {
    path: 'collapsible',
    component: CollapsibleTestComponent,
    data: {breadcrumb: 'Collapsible', animation: 'Collapsible'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {

}
