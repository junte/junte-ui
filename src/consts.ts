import { enUS as dfnsEnUS, ru as dfnsRu } from 'date-fns/locale';
import { i18nEn, i18nRu, localeEnUs as jntEn, localeRu as jntRu } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';
import { Language } from './enums/language';

export const PRELOADING_DELAY = 1000;

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


export const HANDBOOK = {
  layout: {
    name: 'Layout',
    icon: LocalUI.icons.layout,
    link: 'layout',
    components: {
      stack: {
        name: 'Stack',
        icon: LocalUI.icons.between,
        link: 'stack',
        teaser: $localize`:@@message.stack_teaser:arrange elements on axis`
      },
      grid: {
        name: 'Grid',
        icon: LocalUI.icons.grid,
        link: 'grid',
        teaser: $localize`:@@message.grid_teaser:arrange elements in grid`
      },
      block: {
        name: 'Block',
        icon: LocalUI.icons.block,
        link: 'block',
        teaser: $localize`:@@message.block_teaser:grouping elements`
      },
      card: {
        name: 'Card',
        icon: LocalUI.icons.card,
        link: 'card',
        teaser: $localize`:@@message.card_teaser:elements list`
      },
      responsive: {
        name: 'Responsive',
        icon: LocalUI.icons.responsive,
        link: 'responsive',
        teaser: $localize`:@@message.responsive_teaser:adjust UI based on device size`
      },
      skeleton: {
        name: 'Skeleton',
        icon: LocalUI.icons.skeleton,
        link: 'skeleton',
        teaser: $localize`:@@message.skeleton_teaser:show element contour`
      },
      spinner: {
        name: 'Spinner',
        icon: LocalUI.icons.spinner,
        link: 'spinner',
        teaser: $localize`:@@message.spinner_teaser:show processing`
      },
      application: {
        name: 'Application',
        icon: LocalUI.icons.layout,
        link: 'application',
        teaser: $localize`:@@message.application_teaser:layout of whole app`
      },
      informer: {
        name: 'Informer',
        icon: LocalUI.icons.informer,
        link: 'informer',
        teaser: $localize`:@@message.informer_teaser:show overlay messages`
      },
      collapsible: {
        name: 'Collapsible',
        icon: LocalUI.icons.collapsible,
        link: 'collapsible',
        teaser: $localize`:@@message.collapsible_teaser:shorting a content`
      }
    }
  },
  navigation: {
    name: 'Navigation',
    icon: LocalUI.icons.navigation,
    link: 'navigation',
    components: {
      link: {
        name: 'Link',
        icon: LocalUI.icons.link,
        link: 'link',
        teaser: $localize`:@@message.link_teaser:transition between pages`
      },
      menu: {
        name: 'Menu',
        icon: LocalUI.icons.menu,
        link: 'menu',
        teaser: $localize`:@@message.menu_teaser:group multiple links`
      },
      tabs: {
        name: 'Tabs',
        icon: LocalUI.icons.tabs,
        link: 'tabs',
        teaser: $localize`:@@message.tabs_teaser:organize content by sub pages`
      },
      pager: {
        name: 'Pager',
        icon: LocalUI.icons.pager,
        link: 'pager',
        teaser: $localize`:@@message.pager_teaser:rewind elements list`
      },
      breadcrumbs: {
        name: 'Breadcrumbs',
        icon: LocalUI.icons.breadcrumbs,
        link: 'breadcrumbs',
        teaser: $localize`:@@message.breadcrumbs_teaser:current app page's location`
      },
      accordion: {
        name: 'Accordion',
        icon: LocalUI.icons.accordion,
        link: 'accordion',
        teaser: $localize`:@@message.accordion_teaser:toggle the display of sections of content`
      }
    }
  },
  elements: {
    name: 'UI Elements',
    icon: LocalUI.icons.elements,
    link: 'ui-elements',
    components: {
      icon: {
        name: 'Icon',
        icon: LocalUI.icons.icon,
        link: 'icon',
        teaser: $localize`:@@message.icon_teaser:UI associative signs`
      },
      avatar: {
        name: 'Avatar',
        icon: LocalUI.icons.avatar,
        link: 'avatar',
        teaser: $localize`:@@message.avatar_teaser:user profile picture`
      },
      picture: {
        name: 'Picture',
        icon: LocalUI.icons.picture,
        link: 'picture',
        teaser: $localize`:@@message.picture_teaser:image with display rules`
      },
      badge: {
        name: 'Badge',
        icon: LocalUI.icons.badge,
        link: 'badge',
        teaser: $localize`:@@message.badge_teaser:highlight a numerical marks`
      },
      label: {
        name: 'Label',
        icon: LocalUI.icons.label,
        link: 'label',
        teaser: $localize`:@@message.label_teaser:highlight short text pieces`
      },
      dot: {
        name: 'Dot',
        icon: LocalUI.icons.dot,
        link: 'dot',
        teaser: $localize`:@@message.dot_teaser:colored indicator for elements`
      }
    }
  },
  forms: {
    name: 'Forms',
    icon: LocalUI.icons.forms,
    link: 'forms',
    components: {
      button: {
        name: 'Button',
        icon: LocalUI.icons.button,
        link: 'button',
        teaser: $localize`:@@message.button_teaser:process user clicks`
      },
      form: {
        name: 'Form',
        icon: LocalUI.icons.forms,
        link: 'form',
        teaser: $localize`:@@message.form_teaser:input data from user`
      },
      input: {
        name: 'Input',
        icon: LocalUI.icons.input,
        link: 'input',
        teaser: $localize`:@@message.input_teaser:text input field`
      },
      checkbox: {
        name: 'Checkbox',
        icon: LocalUI.icons.checkbox,
        link: 'checkbox',
        teaser: $localize`:@@message.checkbox_teaser:multiple select options`
      },
      radio: {
        name: 'Radio',
        icon: LocalUI.icons.radio,
        link: 'radio',
        teaser: $localize`:@@message.radio_teaser:single select options`
      },
      select: {
        name: 'Select',
        icon: LocalUI.icons.select,
        link: 'select',
        teaser: $localize`:@@message.select_teaser:select data from options list`
      },
      switch: {
        name: 'Switch',
        icon: LocalUI.icons.switch,
        link: 'switch',
        teaser: $localize`:@@message.switch_teaser:toggles two choices`
      },
      slider: {
        name: 'Slider',
        icon: LocalUI.icons.slider,
        link: 'slider',
        teaser: $localize`:@@message.slider_teaser:input value by sliding`
      },
      switcher: {
        name: 'Switcher',
        icon: LocalUI.icons.switcher,
        link: 'switcher',
        teaser: $localize`:@@message.switcher_teaser:universal options selector`
      },
      calendar: {
        name: 'Calendar',
        icon: LocalUI.icons.calendar,
        link: 'calendar',
        teaser: $localize`:@@message.calendar_teaser:select date in calendar`
      },
      datePicker: {
        name: 'Date Picker',
        icon: LocalUI.icons.datePicker,
        link: 'date-picker',
        teaser: $localize`:@@message.date_picker_teaser:select a date or time`
      },
      selectable: {
        name: 'Selectable',
        icon: LocalUI.icons.selectable,
        link: 'selectable',
        teaser: $localize`:@@message.selectable_teaser:select custom options`
      },
      filter: {
        name: 'Filter',
        icon: LocalUI.icons.filter,
        link: 'filter',
        teaser: $localize`:@@message.filter_teaser:filtering data`
      },
      imageCropper: {
        name: 'Image Cropper',
        icon: LocalUI.icons.cropper,
        link: 'image-cropper',
        teaser: $localize`:@@message.image_cropper_teaser:crop image by user`
      },
      imageUploader: {
        name: 'Image Uploader',
        icon: LocalUI.icons.imageUploader,
        link: 'image-uploader',
        teaser: $localize`:@@message.image_uploader_teaser:upload image to server`
      }
    }
  },
  collections: {
    name: 'Collections',
    icon: LocalUI.icons.collections,
    link: 'collections',
    components: {
      gantt: {
        name: 'Gantt',
        icon: LocalUI.icons.gantt,
        link: 'gantt',
        teaser: $localize`:@@message.gantt_teaser:organize monthly planning`
      },
      table: {
        name: 'Table',
        icon: LocalUI.icons.table,
        link: 'table',
        teaser: $localize`:@@message.table_teaser:show element in table`
      },
      timeline: {
        name: 'Timeline',
        icon: LocalUI.icons.timeline,
        link: 'timeline',
        teaser: $localize`:@@message.timeline_teaser:display steps`
      }
    }
  },
  overlays: {
    name: 'Overlays',
    icon: LocalUI.icons.overlays,
    link: 'overlays',
    components: {
      modal: {
        name: 'Modal',
        icon: LocalUI.icons.modal,
        link: 'modal',
        teaser: $localize`:@@message.modal_teaser:display content in window`
      },
      popover: {
        name: 'Popover',
        icon: LocalUI.icons.popover,
        link: 'popover',
        teaser: $localize`:@@message.popover_teaser:display content over element`
      }
    }
  },
  dynamic_data: {
    name: 'Dynamic Data',
    icon: LocalUI.icons.dynamic,
    link: 'dynamic-data',
    components: {
      progressBar: {
        name: 'Progress bar',
        icon: LocalUI.icons.progressBar,
        link: 'progress-bar',
        teaser: $localize`:@@message.progress_bar_teaser:show progress indicator`
      },
      circleBar: {
        name: 'Circle bar',
        icon: LocalUI.icons.circleBar,
        link: 'circle-bar',
        teaser: $localize`:@@message.circle_bar_teaser:chart for metrics`
      },
      chart: {
        name: 'Chart',
        icon: LocalUI.icons.chart,
        link: 'chart',
        teaser: $localize`:@@message.chart_teaser:pieces diagram`
      },
      datePeriod: {
        name: 'Date Period',
        icon: LocalUI.icons.datePeriod,
        link: 'date-period',
        teaser: $localize`:@@message.date_period_teaser:interval of two days`
      },
      timer: {
        name: 'Timer',
        icon: LocalUI.icons.timer,
        link: 'timer',
        teaser: $localize`:@@message.timer_teaser:time countdown`
      }
    }
  },
  other: {
    name: 'Other',
    icon: LocalUI.icons.other,
    link: 'other',
    components: {
      pipes: {
        name: 'Pipes',
        icon: LocalUI.icons.pipes,
        link: 'pipes',
        teaser: $localize`:@@message.pipes_teaser:special pipes`
      },
      confirm: {
        name: 'Confirm',
        icon: LocalUI.icons.confirm,
        link: 'confirm',
        teaser: $localize`:@@message.confirm_teaser:confirm user action`
      },
      animations: {
        name: 'Animations',
        icon: LocalUI.icons.animations,
        link: 'animations',
        teaser: $localize`:@@message.animations_teaser:animate pages transitions`
      },
      message: {
        name: 'Message',
        icon: LocalUI.icons.message,
        link: 'message',
        teaser: $localize`:@@message.message_teaser:text message for user`
      },
      empty: {
        name: 'Empty',
        icon: LocalUI.icons.message,
        link: 'empty',
        teaser: $localize`:@@message.empty_teaser:nothing to display`
      },
      shortcuts: {
        name: 'Shortcuts',
        link: 'shortcuts',
        teaser: $localize`:@@message.shortcuts_teaser:keyboard user interaction`
      }
    }
  }
};

export enum Hero {
  spiderman = 'Spiderman',
  ironman = 'Ironman',
  captainAmerica = 'Captain America',
  thanos = 'Thanos',
  deadpool = 'Deadpool',
  blackwidow = 'Blackwidow',
  hulk = 'Hulk',
  thor = 'Thor',
  batman = 'Batman',
  wolverine = 'Wolverine',
  superman = 'Superman',
  wonder = 'Wonder Woman'
}

export enum Abilities {
  immortality = 'Immortality',
  fly = 'Fly',
  strength = 'Superhuman strength',
  intellect = 'Genius Intellect'
}

export enum Sources {
  technologies = 'Technologies',
  acquired = 'Acquired',
  congenital = 'Congenital'
}

export enum Universes {
  dc = 'DC',
  marvel = 'Marvel',
  xmen = 'X-Men'
}

export const HEROES = {
  captain: {
    name: Hero.captainAmerica,
    avatar: 'assets/images/heroes/captain.svg',
    universe: Universes.marvel,
    ability: Abilities.immortality,
    source: Sources.acquired,
    likes: 221
  },
  spiderman: {
    name: Hero.spiderman,
    avatar: 'assets/images/heroes/spiderman.svg',
    universe: Universes.marvel,
    ability: Abilities.strength,
    source: Sources.acquired,
    likes: 357
  },
  ironman: {
    name: Hero.ironman,
    avatar: 'assets/images/heroes/ironman.svg',
    universe: Universes.marvel,
    ability: Abilities.intellect,
    source: Sources.technologies,
    likes: 417
  },
  superman: {
    name: Hero.superman,
    avatar: 'assets/images/heroes/superman.svg',
    universe: Universes.dc,
    ability: Abilities.fly,
    source: Sources.congenital,
    likes: 483
  },
  batman: {
    name: Hero.batman,
    avatar: 'assets/images/heroes/batman.svg',
    universe: Universes.dc,
    ability: Abilities.intellect,
    source: Sources.technologies,
    likes: 452
  },
  deadpool: {
    name: Hero.deadpool,
    avatar: 'assets/images/heroes/deadpool.svg',
    universe: Universes.xmen,
    ability: Abilities.immortality,
    source: Sources.acquired,
    likes: 436
  },
  wolverine: {
    name: Hero.wolverine,
    avatar: 'assets/images/heroes/wolverine.svg',
    universe: Universes.xmen,
    ability: Abilities.immortality,
    source: Sources.acquired,
    likes: 362
  },
  hulk: {
    name: Hero.hulk,
    avatar: 'assets/images/heroes/hulk.svg',
    universe: Universes.marvel,
    ability: Abilities.strength,
    source: Sources.acquired,
    likes: 372
  },
  wonder: {
    name: Hero.wonder,
    avatar: 'assets/images/heroes/thor.svg',
    universe: Universes.marvel,
    ability: Abilities.fly,
    source: Sources.congenital,
    likes: 460
  },
  thanos: {
    name: Hero.thanos,
    avatar: 'assets/images/heroes/thanos.svg',
    universe: Universes.marvel,
    ability: Abilities.strength,
    source: Sources.congenital,
    likes: 256
  }
}
