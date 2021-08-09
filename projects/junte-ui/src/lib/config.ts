import { Injectable } from '@angular/core';
import { format, Locale } from 'date-fns';
import { enUS as dfnsEnUS } from 'date-fns/locale';
import { NgxLoggerLevel } from 'ngx-logger';
import { CheckboxStyle, SwitchStyle } from './core/enums/style';
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
  hash?: string;
  i18n?: any;
  logger?: any;
  modal?: { animation: boolean };
  switch?: {
    style?: SwitchStyle,
    icons?: { on: string, off: string }
  };
  checkbox?: {
    style?: CheckboxStyle,
    icon?: string
  };
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  locale?: {
    ui?: LocaleUI,
    dfns?: Locale
  };
}

export const JUNTE_DEFAULT_CONFIG = {
  assets: 'assets',
  hash: format(new Date(), 'ddLLyyyy'),
  i18n: i18nEn,
  logger: NgxLoggerLevel.DEBUG,
  modal: {animation: true},
  switch: {
    style: SwitchStyle.default,
    icons: { on: null, off: null }
  },
  checkbox: {
    style: CheckboxStyle.default,
    icon: null
  },
  weekStartsOn: 0,
  locale: {
    ui: jntEn,
    dfns: dfnsEnUS
  }
};
