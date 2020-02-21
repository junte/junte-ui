import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoaderFactory, JunteUIModuleConfig } from '../../config';
import { en } from '../../i18n/en';
import { AvatarModule } from './avatar/avatar.module';
import { BadgeModule } from './badge/badge.module';
import { IconModule } from './icon/icon.module';
import { LabelModule } from './label/label.module';

@NgModule({
  exports: [
    AvatarModule,
    BadgeModule,
    IconModule,
    LabelModule
  ]
})
export class ElementsModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<ElementsModule> {
    return {
      ngModule: ElementsModule,
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
