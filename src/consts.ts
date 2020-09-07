import { enUS as dfnsEnUS, ru as dfnsRu } from 'date-fns/locale';
import { en as jntEn, ru as jntRu } from 'junte-ui';
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
  i18n: jntEn,
  masks: {
    date: '__.__.____',
    time: '__:__',
    datetime: '__.__.____ __:__'
  },
  formats: {
    date: 'dd.MM.yyyy',
    time: 'HH:mm',
    datetime: 'dd.MM.yyyy HH:mm'
  },
  locale: {
    dfns: dfnsEnUS
  }
};
switch (CURRENT_LANGUAGE) {
  case Language.ru:
    JUNTE_UI_CONFIG = {
      i18n: jntRu,
      masks: {
        date: '__.__.____',
        time: '__:__',
        datetime: '__.__.____ __:__'
      },
      formats: {
        date: 'dd.MM.yyyy',
        time: 'HH:mm',
        datetime: 'dd.MM.yyyy HH:mm'
      },
      locale: {
        dfns: dfnsRu
      }
    };
    break;
  case Language.en:
  default:
  // en
}
