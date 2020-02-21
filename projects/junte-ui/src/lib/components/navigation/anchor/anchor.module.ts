import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoaderFactory, JunteUIModuleConfig } from '../../../config';
import { en } from '../../../i18n/en';
import { IconModule } from '../../elements/icon/icon.module';

import { AnchorComponent } from './anchor.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  declarations: [
    AnchorComponent
  ],
  exports: [
    AnchorComponent
  ],
  entryComponents: [
    AnchorComponent
  ]
})
export class AnchorModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<AnchorModule> {
    return {
      ngModule: AnchorModule,
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
