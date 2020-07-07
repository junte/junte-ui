import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { i18nLoaderFactory, JunteUIModuleConfig } from '../../config';

export const I18N_PROVIDERS = TranslateModule.forRoot({
  isolate: true,
  loader: {
    provide: TranslateLoader,
    useFactory: i18nLoaderFactory,
    deps: [JunteUIModuleConfig]
  },
  defaultLanguage: 'en'
}).providers;
