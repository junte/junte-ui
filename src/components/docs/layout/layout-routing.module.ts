import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutTestComponent } from 'src/components/docs/layout/app/app-layout-test.component';
import { BlockTestComponent } from 'src/components/docs/layout/block/block-test.component';
import { GridTestComponent } from 'src/components/docs/layout/grid/grid-test.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {

}
