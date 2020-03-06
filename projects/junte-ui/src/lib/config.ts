import { Injectable } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Locale } from 'date-fns';
import { enUS as dfnsEnUS } from 'date-fns/locale';
import { DateFnsConfigurationService } from 'ngx-date-fns';
import { en } from './i18n/en';
import { I18nLoader } from './i18n/loader';

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
        dfns?: Locale
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
