import { ModuleWithProviders, NgModule } from '@angular/core';
import { CardModule } from './card/card.module';
import { CollapsibleModule } from './collapsible/collapsible.module';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../config';
import { AppLayoutModule } from './app/app-layout.module';
import { BlockModule } from './block/block.module';
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

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<LayoutModule> {
    return {
      ngModule: LayoutModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
