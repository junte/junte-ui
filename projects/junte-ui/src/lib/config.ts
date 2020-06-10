import { Injectable } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { enUS as dfnsEnUS } from 'date-fns/esm/locale';
import { DateFnsConfigurationService } from 'ngx-date-fns';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { en } from './core/i18n/en';
import { I18nLoader } from './core/i18n/loader';

export function I18nLoaderFactory(config?: JunteUIModuleConfig) {
  const conf = config || {};
  return new I18nLoader(conf.i18n || en);
}

export function DfnsFactory(config: JunteUIModuleConfig) {
  const conf = config || {};
  const service = new DateFnsConfigurationService();
  const locale = conf.locale || {};
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
  }).providers,
  LoggerModule.forRoot({
    level: NgxLoggerLevel.DEBUG
  }).providers
];
