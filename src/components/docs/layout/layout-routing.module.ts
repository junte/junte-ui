import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutTestComponent } from './app/app-layout-test.component';
import { BlockTestComponent } from './block/block-test.component';
import { CardTestComponent } from './card/card-test.component';
import { CollapsibleTestComponent } from './collapsible/collapsible-test.component';
import { GridTestComponent } from './grid/grid-test.component';
import { InformerTestComponent } from './informer/informer-test.component';
import { ResponsiveTestComponent } from './responsive/responsive-test.component';
import { SkeletonTestComponent } from './skeleton/skeleton-test.component';
import { SpinnerTestComponent } from './spinner/spinner-test.component';
import { StackTestComponent } from './stack/stack-test.component';

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
  },
  {
    path: 'card',
    component: CardTestComponent,
    data: {breadcrumb: 'Card', animation: 'Card'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {

}
