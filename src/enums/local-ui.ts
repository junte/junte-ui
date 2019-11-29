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
  huge = 'huge'
}

class ShortIcons {
  static icons = {
    horizontal: FontLayoutIcons.horizontal + ':font:layout',
    vertical: FontLayoutIcons.vertical + ':font:layout',
    start: FontLayoutIcons.start + ':font:layout',
    end: FontLayoutIcons.end + ':font:layout',
    stretch: FontLayoutIcons.stretch + ':font:layout',
    center: FontLayoutIcons.center + ':font:layout',
    nowrap: FontLayoutIcons.nowrap + ':font:layout',
    wrap: FontLayoutIcons.wrap + ':font:layout',
    reverse: FontLayoutIcons.reverse + ':font:layout',
    around: FontLayoutIcons.around + ':font:layout',
    evenly: FontLayoutIcons.evenly + ':font:layout',
    between: FontLayoutIcons.between + ':font:layout',
    tiny: FontLayoutIcons.tiny + ':font:layout',
    small: FontLayoutIcons.small + ':font:layout',
    normal: FontLayoutIcons.normal + ':font:layout',
    big: FontLayoutIcons.big + ':font:layout',
    large: FontLayoutIcons.large + ':font:layout',
    huge: FontLayoutIcons.huge + ':font:layout'
  };
}


export class LocalUI {
  static icons = {
    layout: {
      font: FontLayoutIcons,
      ...ShortIcons.icons
    }
  };
}
