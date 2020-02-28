import { Injectable } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { enUS as dfnsEnUS } from 'date-fns/locale';
import { DateFnsConfigurationService } from 'ngx-date-fns';
import { en } from './i18n/en';
import { I18nLoader } from './i18n/loader';

export function I18nLoaderFactory(config: JunteUIModuleConfig) {
  return new I18nLoader(config.i18n || en);
}

export function DfnsFactory(config: JunteUIModuleConfig) {
  const service = new DateFnsConfigurationService();
  const locale = config.locale || {};
  service.setLocale(locale.dfns || dfnsEnUS);
  return service;
}

@Injectable()
export class JunteUIModuleConfig {
  i18n?: any;
  locale?: {
    dfns?: any
  };
}

export const JUNTE_MODULE_PROVIDES = [
  {
    provide: DateFnsConfigurationService,
    useFactory: DfnsFactory,
    deps: [JunteUIModuleConfig]
  },
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: I18nLoaderFactory,
      deps: [JunteUIModuleConfig]
    },
    defaultLanguage: 'en'
  }).providers
];
