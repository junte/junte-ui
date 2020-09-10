import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { i18nEn } from './en';
import { I18nLoader } from './loader';
import { JunteUIModuleConfig } from '../../config';

export function i18nLoaderFactory(config: JunteUIModuleConfig) {
  return new I18nLoader(config.i18n || i18nEn);
}

export const I18N_PROVIDERS = TranslateModule.forRoot({
  isolate: true,
  loader: {
    provide: TranslateLoader,
    useFactory: i18nLoaderFactory,
    deps: [JunteUIModuleConfig]
  },
  defaultLanguage: 'en'
}).providers;
