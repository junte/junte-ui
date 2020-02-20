import { ModuleWithProviders, NgModule } from '@angular/core';
import { LpModule } from './lp/lp.module';
import { AppLayoutModule } from './app/app-layout.module';
import { BlockModule } from './block/block.module';
import { GridModule } from './grid/grid.module';
import { SkeletonModule } from './skeleton/skeleton.module';
import { SpinnerModule } from './spinner/spinner.module';
import { StackModule } from './stack/stack.module';
import { JunteUIModuleConfig } from '../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../i18n/loader';
import { en } from '../../i18n/en';

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

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<LayoutModule> {
    return {
      ngModule: LayoutModule,
      providers: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useValue: new I18nLoader(config.i18n || en)
          },
          defaultLanguage: 'en'
        }).providers]
    };
  }

}
