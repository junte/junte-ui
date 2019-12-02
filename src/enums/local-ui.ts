export enum FontLayoutIcons {
  horizontal = 'horizontal',
  vertical = 'vertical',
  start = 'start',
  end = 'end',
  stretch = 'stretch',
  center = 'center',
  nowrap = 'nowrap',
  wrap = 'wrap',
  reverse = 'reverse',
  around = 'around',
  evenly = 'evenly',
  between = 'between',
  tiny = 'tiny',
  small = 'small',
  normal = 'normal',
  big = 'big',
  large = 'large',
  huge = 'huge',
  baseline = 'baseline'
}

export enum SvgLocalIcons {
  preview = 'preview',
  code = 'code',
  api = 'api'
}

class ShortIcons {
  static icons = {
    horizontal: FontLayoutIcons.horizontal + ':font:junte-ui-test-layout',
    vertical: FontLayoutIcons.vertical + ':font:junte-ui-test-layout',
    start: FontLayoutIcons.start + ':font:junte-ui-test-layout',
    end: FontLayoutIcons.end + ':font:junte-ui-test-layout',
    stretch: FontLayoutIcons.stretch + ':font:junte-ui-test-layout',
    center: FontLayoutIcons.center + ':font:junte-ui-test-layout',
    nowrap: FontLayoutIcons.nowrap + ':font:junte-ui-test-layout',
    wrap: FontLayoutIcons.wrap + ':font:junte-ui-test-layout',
    reverse: FontLayoutIcons.reverse + ':font:junte-ui-test-layout',
    around: FontLayoutIcons.around + ':font:junte-ui-test-layout',
    evenly: FontLayoutIcons.evenly + ':font:junte-ui-test-layout',
    between: FontLayoutIcons.between + ':font:junte-ui-test-layout',
    tiny: FontLayoutIcons.tiny + ':font:junte-ui-test-layout',
    small: FontLayoutIcons.small + ':font:junte-ui-test-layout',
    normal: FontLayoutIcons.normal + ':font:junte-ui-test-layout',
    big: FontLayoutIcons.big + ':font:junte-ui-test-layout',
    large: FontLayoutIcons.large + ':font:junte-ui-test-layout',
    huge: FontLayoutIcons.huge + ':font:junte-ui-test-layout',
    baseline: FontLayoutIcons.baseline + ':font:junte-ui-test-layout',
    preview: SvgLocalIcons.preview + ':svg:local',
    code: SvgLocalIcons.code + ':svg:local',
    api: SvgLocalIcons.api + ':svg:local',
  };
}


export class LocalUI {
  static icons = {
    layout: {
      font: FontLayoutIcons,
      svg: {
        local: {
          preview: SvgLocalIcons.preview,
          code: SvgLocalIcons.code,
          api: SvgLocalIcons.api
        }
      },
      ...ShortIcons.icons
    }
  };
}
