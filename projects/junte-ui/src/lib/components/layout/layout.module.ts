import { NgModule } from '@angular/core';
import { LpModule } from './lp/lp.module';
import { AppLayoutModule } from './app/app-layout.module';
import { BlockModule } from './block/block.module';
import { GridModule } from './grid/grid.module';
import { SkeletonModule } from './skeleton/skeleton.module';
import { SpinnerModule } from './spinner/spinner.module';
import { StackModule } from './stack/stack.module';

@NgModule({
  exports: [
    GridModule,
    StackModule,
    BlockModule,
    SkeletonModule,
    SpinnerModule,
    AppLayoutModule,
    LpModule
  ]
})
export class LayoutModule {
}
