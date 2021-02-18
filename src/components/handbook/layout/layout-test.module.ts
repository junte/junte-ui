import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppLayoutModule, GridModule } from 'junte-ui';
import { SectionModule } from '../shared/section/section.module';
import { CollectionsTestModule } from '../collections/collections-test.module';
import { AppLayoutTestModule } from './app/app-layout-test.module';
import { BlockTestModule } from './block/block-test.module';
import { CardTestModule } from './card/card-test.module';
import { CollapsibleTestModule } from './collapsible/collapsible-test.module';
import { GridTestModule } from './grid/grid-test.module';
import { InformerTestModule } from './informer/informer-test.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutTestComponent } from './layout-test.component';
import { ResponsiveTestModule } from './responsive/responsive-test.module';
import { SkeletonTestModule } from './skeleton/skeleton-test.module';
import { SpinnerTestModule } from './spinner/spinner-test.module';
import { StackTestModule } from './stack/stack-test.module';

@NgModule({
  declarations: [
    LayoutTestComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SectionModule,
    AppLayoutModule,
    GridModule
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
    CardTestModule,
    LayoutTestComponent
  ]
})
export class LayoutTestModule {
}
