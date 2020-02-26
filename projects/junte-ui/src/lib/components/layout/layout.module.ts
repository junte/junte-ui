import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoaderFactory, JunteUIModuleConfig } from '../../config';
import { AppLayoutModule } from './app/app-layout.module';
import { BlockModule } from './block/block.module';
import { GridModule } from './grid/grid.module';
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
    LpModule
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
        },
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: I18nLoaderFactory,
            deps: [JunteUIModuleConfig]
          },
          defaultLanguage: 'en'
        }).providers
      ]
    };
  }

}
