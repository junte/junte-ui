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
    data: {breadcrumb: 'Grid'}
  },
  {
    path: 'stack',
    component: StackTestComponent,
    data: {breadcrumb: 'Stack'}
  },
  {
    path: 'block',
    component: BlockTestComponent,
    data: {breadcrumb: 'Block'}
  },
  {
    path: 'responsive',
    component: ResponsiveTestComponent,
    data: {breadcrumb: 'Responsive'}
  },
  {
    path: 'spinner',
    component: SpinnerTestComponent,
    data: {breadcrumb: 'Spinner'}
  },
  {
    path: 'application',
    component: AppLayoutTestComponent,
    data: {breadcrumb: 'Application'}
  },
  {
    path: 'skeleton',
    component: SkeletonTestComponent,
    data: {breadcrumb: 'Skeleton'}
  },
  {
    path: 'informer',
    component: InformerTestComponent,
    data: {breadcrumb: 'Informer'}
  },
  {
    path: 'collapsible',
    component: CollapsibleTestComponent,
    data: {breadcrumb: 'Collapsible'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {

}
