import { Injectable } from '@angular/core';
import { en } from './i18n/en';
import { I18nLoader } from './i18n/loader';

export function I18nLoaderFactory(config: JunteUIModuleConfig) {
  return new I18nLoader(config.i18n || en);
}

@Injectable()
export class JunteUIModuleConfig {
  i18n?: any;
}
