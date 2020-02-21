import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoaderFactory, JunteUIModuleConfig } from '../../../config';
import { JunteDirectiveModule } from '../../../directives/junte-directive.module';
import { en } from '../../../i18n/en';
import { ArrayPipeModule } from '../../../pipes/array.pipe.module';
import { StackModule } from '../stack/stack.module';
import { SkeletonComponent } from './skeleton.component';

@NgModule({
  imports: [
    CommonModule,
    JunteDirectiveModule,
    StackModule,
    ArrayPipeModule
  ],
  declarations: [
    SkeletonComponent
  ],
  entryComponents: [
    SkeletonComponent
  ],
  exports: [
    SkeletonComponent
  ]
})
export class SkeletonModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<SkeletonModule> {
    return {
      ngModule: SkeletonModule,
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
