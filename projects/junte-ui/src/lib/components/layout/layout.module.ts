import { NgModule } from '@angular/core';
import { AppLayoutModule } from './app-layout/app-layout.module';
import { BlockModule } from './block/block.module';
import { GridModule } from './grid/grid.module';
import { KanbanModule } from './kanban/kanban.module';
import { SkeletonModule } from './skeleton/skeleton.module';
import { SpinnerModule } from './spinner/spinner.module';
import { StackModule } from './stack/stack.module';

@NgModule({
  exports: [
    AppLayoutModule,
    BlockModule,
    GridModule,
    KanbanModule,
    SkeletonModule,
    SpinnerModule,
    StackModule
  ]
})
export class LayoutModule {
}
