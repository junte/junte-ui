import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoaderFactory, JunteUIModuleConfig } from '../../../config';
import { en } from '../../../i18n/en';
import { DotComponent } from './dot.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DotComponent
  ],
  declarations: [
    DotComponent
  ],
  entryComponents: [
    DotComponent,
  ]
})
export class DotModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<DotModule> {
    return {
      ngModule: DotModule,
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
