import { Injectable } from '@angular/core';
import { Locale } from 'date-fns';
import { enUS as dfnsEnUS } from 'date-fns/locale';
import { i18nEn } from './core/i18n/en';
import { localeEnUs as jntEn } from './core/locale/en';

export interface LocaleUI {
  masks: {
    date: string,
    time: string,
    datetime: string
  };
}

@Injectable()
export class JunteUIConfig {
  assets?: string;
  i18n?: any;
  weekStartsOn?:  0 | 1 | 2 | 3 | 4 | 5 | 6;
  locale?: {
    ui?: LocaleUI,
    dfns?: Locale
  };
}

export const JUNTE_DEFAULT_CONFIG = {
  assets: 'assets',
  i18n: i18nEn,
  weekStartsOn: 0,
  locale: {
    ui: jntEn,
    dfns: dfnsEnUS
  }
};
