import { NgModule } from '@angular/core';
import { CardTestModule } from './card/card-test.module';
import { CollapsibleTestModule } from './collapsible/collapsible-test.module';
import { CollectionsTestModule } from '../collections/collections-test.module';
import { InformerTestModule } from './informer/informer-test.module';
import { AppLayoutTestModule } from './app/app-layout-test.module';
import { BlockTestModule } from './block/block-test.module';
import { GridTestModule } from './grid/grid-test.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { ResponsiveTestModule } from './responsive/responsive-test.module';
import { SkeletonTestModule } from './skeleton/skeleton-test.module';
import { SpinnerTestModule } from './spinner/spinner-test.module';
import { StackTestModule } from './stack/stack-test.module';

@NgModule({
  imports: [
    LayoutRoutingModule
  ],
  exports: [
    AppLayoutTestModule,
    BlockTestModule,
    GridTestModule,
    SkeletonTestModule,
    SpinnerTestModule,
    StackTestModule,
    InformerTestModule,
    CollectionsTestModule,
    ResponsiveTestModule,
    CollapsibleTestModule,
    CardTestModule
  ]
})
export class LayoutTestModule {
}
