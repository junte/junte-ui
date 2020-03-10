import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { StackTestModule } from './stack/stack-test.module';
import { SpinnerTestModule } from './spinner/spinner-test.module';
import { SkeletonTestModule } from './skeleton/skeleton-test.module';
import { GridTestModule } from './grid/grid-test.module';
import { BlockTestModule } from './block/block-test.module';
import { AppLayoutTestModule } from './app/app-layout-test.module';

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
    StackTestModule
  ]
})
export class LayoutTestModule {
}
