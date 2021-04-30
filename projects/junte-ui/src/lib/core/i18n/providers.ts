import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { JunteUIConfig } from '../../config';
import { I18nLoader } from './loader';

export function i18nLoaderFactory(config: JunteUIConfig) {
  return new I18nLoader(config.i18n);
}

export const I18N_PROVIDERS = TranslateModule.forRoot({
  isolate: true,
  loader: {
    provide: TranslateLoader,
    useFactory: i18nLoaderFactory,
    deps: [JunteUIConfig]
  },
  defaultLanguage: 'en'
}).providers;
