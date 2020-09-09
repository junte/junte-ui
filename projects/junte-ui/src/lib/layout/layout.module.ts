import { NgModule } from '@angular/core';
import { AppLayoutModule } from './app/app-layout.module';
import { BlockModule } from './block/block.module';
import { CardModule } from './card/card.module';
import { CollapsibleModule } from './collapsible/collapsible.module';
import { GridModule } from './grid/grid.module';
import { InformerModule } from './informer/informer.module';
import { LpModule } from './lp/lp.module';
import { ResponsiveModule } from './responsive/responsive.module';
import { SkeletonModule } from './skeleton/skeleton.module';
import { SpinnerModule } from './spinner/spinner.module';
import { StackModule } from './stack/stack.module';

@NgModule({
  exports: [
    GridModule,
    ResponsiveModule,
    StackModule,
    BlockModule,
    SkeletonModule,
    SpinnerModule,
    AppLayoutModule,
    LpModule,
    InformerModule,
    CollapsibleModule,
    CardModule
  ]
})
export class LayoutModule {
}
