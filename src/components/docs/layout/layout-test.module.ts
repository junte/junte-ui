import { NgModule } from '@angular/core';
import { InformerTestModule } from 'src/components/docs/layout/informer/informer-test.module';
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
    ResponsiveTestModule
  ]
})
export class LayoutTestModule {
}
