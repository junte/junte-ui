import { ModuleWithProviders, Type } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { JUNTE_UI_I18N_KEYS } from './i18n/consts';
import { en } from './i18n/en';
import { I18nLoader } from './i18n/loader';

export function createModule<T>(module: Type<T>, config: JunteUIModuleConfig): ModuleWithProviders<T> {
  return {
    ngModule: module,
    providers: [
      {
        provide: JUNTE_UI_I18N_KEYS,
        useValue: config.i18n || en
      },
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: I18nLoader
        },
        defaultLanguage: 'en'
      }).providers]
  };
}

export interface JunteUIModuleConfig {
  i18n?: any;
}
