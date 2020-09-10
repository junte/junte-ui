import { enUS as dfnsEnUS, ru as dfnsRu } from 'date-fns/locale';
import { i18nEn, i18nRu, localeEnUs as jntEn, localeRu as jntRu } from 'junte-ui';
import { Language } from './enums/language';

export const PRELOADING_DELAY = 5000;

export const CURRENT_LANGUAGE = (() => {
  const base = document.querySelector('base')
    .getAttribute('href');
  switch (base) {
    case '/ru/':
      return Language.ru;
    case '/en/':
    default:
      return Language.en;
  }
})();
export let JUNTE_UI_CONFIG = {
  i18n: i18nEn,
  locale: {
    ui: jntEn,
    dfns: dfnsEnUS
  }
};
switch (CURRENT_LANGUAGE) {
  case Language.ru:
    JUNTE_UI_CONFIG = {
      i18n: i18nRu,
      locale: {
        ui: jntRu,
        dfns: dfnsRu
      }
    };
    break;
  case Language.en:
  default:
  // en
}
