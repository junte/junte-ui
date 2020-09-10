import { Injectable } from '@angular/core';
import { Locale } from 'date-fns';
import { enUS as dfnsEnUS } from 'date-fns/locale';
import { i18nEn } from './core/i18n/en';
import { localeEnUs as jntEn } from './core/locale/en';

export class LocaleUI {
  masks: {
    date: string,
    time: string,
    datetime: string
  };
}

@Injectable()
export class JunteUIModuleConfig {
  i18n?: any;
  locale?: {
    ui?: LocaleUI,
    dfns?: Locale
  };
}

export const JUNTE_DEFAULT_CONFIG = {
  i18n: i18nEn,
  locale: {
    ui: jntEn,
    dfns: dfnsEnUS
  }
};
