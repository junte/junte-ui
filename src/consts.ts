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
        teaser: $localize`:@@message.stack_teaser:arrange elements in axis`
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
        teaser: $localize`:@@message.responsive_teaser:display elements depending on device size`
      },
      skeleton: {
        name: 'Skeleton',
        icon: LocalUI.icons.skeleton,
        link: 'skeleton',
        teaser: $localize`:@@message.skeleton_teaser:element preview`
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
        teaser: $localize`:@@message.link_teaser:go to to page`
      },
      menu: {
        name: 'Menu',
        icon: LocalUI.icons.menu,
        link: 'menu',
        teaser: $localize`:@@message.menu_teaser:multiple links`
      },
      tabs: {
        name: 'Tabs',
        icon: LocalUI.icons.tabs,
        link: 'tabs',
        teaser: $localize`:@@message.tabs_teaser:subpages for elements`
      },
      pager: {
        name: 'Pager',
        icon: LocalUI.icons.pager,
        link: 'pager',
        teaser: $localize`:@@message.pager_teaser:Teaser will be filled soon`
      },
      breadcrumbs: {
        name: 'Breadcrumbs',
        icon: LocalUI.icons.breadcrumbs,
        link: 'breadcrumbs',
        teaser: $localize`:@@message.breadcrumbs_teaser:Teaser will be filled soon`
      },
      accordion: {
        name: 'Accordion',
        icon: LocalUI.icons.accordion,
        link: 'accordion',
        teaser: $localize`:@@message.accordion_teaser:Teaser will be filled soon`
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
        teaser: $localize`:@@message.icon_teaser:Teaser will be filled soon`
      },
      avatar: {
        name: 'Avatar',
        icon: LocalUI.icons.avatar,
        link: 'avatar',
        teaser: $localize`:@@message.avatar_teaser:Teaser will be filled soon`
      },
      picture: {
        name: 'Picture',
        icon: LocalUI.icons.picture,
        link: 'picture',
        teaser: $localize`:@@message.picture_teaser:Teaser will be filled soon`
      },
      badge: {
        name: 'Badge',
        icon: LocalUI.icons.badge,
        link: 'badge',
        teaser: $localize`:@@message.badge_teaser:Teaser will be filled soon`
      },
      label: {
        name: 'Label',
        icon: LocalUI.icons.label,
        link: 'label',
        teaser: $localize`:@@message.label_teaser:Teaser will be filled soon`
      },
      dot: {
        name: 'Dot',
        icon: LocalUI.icons.dot,
        link: 'dot',
        teaser: $localize`:@@message.dot_teaser:Teaser will be filled soon`
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
        teaser: $localize`:@@message.button_teaser:Teaser will be filled soon`
      },
      form: {
        name: 'Form',
        icon: LocalUI.icons.forms,
        link: 'form',
        teaser: $localize`:@@message.form_teaser:Teaser will be filled soon`
      },
      input: {
        name: 'Input',
        icon: LocalUI.icons.input,
        link: 'input',
        teaser: $localize`:@@message.input_teaser:Teaser will be filled soon`
      },
      checkbox: {
        name: 'Checkbox',
        icon: LocalUI.icons.checkbox,
        link: 'checkbox',
        teaser: $localize`:@@message.checkbox_teaser:Teaser will be filled soon`
      },
      radio: {
        name: 'Radio',
        icon: LocalUI.icons.radio,
        link: 'radio',
        teaser: $localize`:@@message.radio_teaser:Teaser will be filled soon`
      },
      select: {
        name: 'Select',
        icon: LocalUI.icons.select,
        link: 'select',
        teaser: $localize`:@@message.select_teaser:Teaser will be filled soon`
      },
      switch: {
        name: 'Switch',
        icon: LocalUI.icons.switch,
        link: 'switch',
        teaser: $localize`:@@message.switch_teaser:Teaser will be filled soon`
      },
      slider: {
        name: 'Slider',
        icon: LocalUI.icons.slider,
        link: 'slider',
        teaser: $localize`:@@message.slider_teaser:Teaser will be filled soon`
      },
      switcher: {
        name: 'Switcher',
        icon: LocalUI.icons.switcher,
        link: 'switcher',
        teaser: $localize`:@@message.switcher_teaser:Teaser will be filled soon`
      },
      calendar: {
        name: 'Calendar',
        icon: LocalUI.icons.calendar,
        link: 'calendar',
        teaser: $localize`:@@message.calendar_teaser:Teaser will be filled soon`
      },
      datePicker: {
        name: 'Date Picker',
        icon: LocalUI.icons.datePicker,
        link: 'date-picker',
        teaser: $localize`:@@message.date_picker_teaser:Teaser will be filled soon`
      },
      selectable: {
        name: 'Selectable',
        icon: LocalUI.icons.selectable,
        link: 'selectable',
        teaser: $localize`:@@message.selectable_teaser:Teaser will be filled soon`
      },
      filter: {
        name: 'Filter',
        icon: LocalUI.icons.filter,
        link: 'filter',
        teaser: $localize`:@@message.filter_teaser:Teaser will be filled soon`
      },
      imageCropper: {
        name: 'Image Cropper',
        icon: LocalUI.icons.cropper,
        link: 'image-cropper',
        teaser: $localize`:@@message.image_cropper_teaser:Teaser will be filled soon`
      },
      imageUploader: {
        name: 'Image Uploader',
        icon: LocalUI.icons.imageUploader,
        link: 'image-uploader',
        teaser: $localize`:@@message.image_uploader_teaser:Teaser will be filled soon`
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
        teaser: $localize`:@@message.gantt_teaser:Teaser will be filled soon`
      },
      table: {
        name: 'Table',
        icon: LocalUI.icons.table,
        link: 'table',
        teaser: $localize`:@@message.table_teaser:Teaser will be filled soon`
      },
      timeline: {
        name: 'Timeline',
        icon: LocalUI.icons.timeline,
        link: 'timeline',
        teaser: $localize`:@@message.timeline_teaser:Teaser will be filled soon`
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
        teaser: $localize`:@@message.modal_teaser:Teaser will be filled soon`
      },
      popover: {
        name: 'Popover',
        icon: LocalUI.icons.popover,
        link: 'popover',
        teaser: $localize`:@@message.popover_teaser:Teaser will be filled soon`
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
        teaser: $localize`:@@message.progress_bar_teaser:Teaser will be filled soon`
      },
      circleBar: {
        name: 'Circle bar',
        icon: LocalUI.icons.circleBar,
        link: 'circle-bar',
        teaser: $localize`:@@message.circle_bar_teaser:Teaser will be filled soon`
      },
      chart: {
        name: 'Chart',
        icon: LocalUI.icons.chart,
        link: 'chart',
        teaser: $localize`:@@message.chart_teaser:Teaser will be filled soon`
      },
      datePeriod: {
        name: 'Date Period',
        icon: LocalUI.icons.datePeriod,
        link: 'date-period',
        teaser: $localize`:@@message.date_period_teaser:Teaser will be filled soon`
      },
      timer: {
        name: 'Timer',
        icon: LocalUI.icons.timer,
        link: 'timer',
        teaser: $localize`:@@message.timer_teaser:Teaser will be filled soon`
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
        teaser: $localize`:@@message.pipes_teaser:Teaser will be filled soon`
      },
      confirm: {
        name: 'Confirm',
        icon: LocalUI.icons.confirm,
        link: 'confirm',
        teaser: $localize`:@@message.confirm_teaser:Teaser will be filled soon`
      },
      animations: {
        name: 'Animations',
        icon: LocalUI.icons.animations,
        link: 'animations',
        teaser: $localize`:@@message.animations_teaser:Teaser will be filled soon`
      },
      message: {
        name: 'Message',
        icon: LocalUI.icons.message,
        link: 'message',
        teaser: $localize`:@@message.message_teaser:Teaser will be filled soon`
      },
      empty: {
        name: 'Empty',
        icon: LocalUI.icons.message,
        link: 'empty',
        teaser: $localize`:@@message.empty_teaser:Teaser will be filled soon`
      },
      shortcuts: {
        name: 'Shortcuts',
        link: 'shortcuts',
        teaser: $localize`:@@message.shortcuts_teaser:Teaser will be filled soon`
      }
    }
  }
};

