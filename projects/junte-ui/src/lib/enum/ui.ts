export enum Icons {
  arrowDown = 'arrow-down',
  check = 'check',
  circle = 'circle',
  loading = 'loading',
  plus = 'plus'
}

export enum Schemes {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  warning = 'warning',
  danger = 'danger'
}


export enum Sizes {
  small = 'small',
  large = 'large'
}

export enum Outline {
  ghost = 'ghost',
  fill = ''
}

export enum FlexAlign {
  start = 'start',
  center = 'center',
  end = 'end',
  baseline = 'baseline',
  stretch = 'stretch'
}

export enum FlexJustify {
  start = 'start',
  center = 'center',
  end = 'end',
  between = 'between',
  around = 'around',
  evenly = 'evenly'
}

export enum FlexDirection {
  row = 'row',
  column = 'column',
  rowReverse = 'row-reverse',
  columnReverse = 'column-reverse'
}

export enum FlexWrap {
  wrap = 'wrap',
  noWrap = 'nowrap',
  reverse = 'reverse'
}

export enum FlexAlignContent {
  start = 'start',
  center = 'center',
  end = 'end',
  between = 'between',
  around = 'around',
  evenly = 'evenly',
  stretch = 'stretch'
}

export enum FlexAlignSelf {
  start = 'start',
  center = 'center',
  end = 'end',
  stretch = 'stretch',
  baseline = 'baseline',
  auto = 'auto'
}

export class UI {
  static icons = Icons;
  static schemes = Schemes;
  static sizes = Sizes;
  static outline = Outline;
  static flex = {
    align: FlexAlign,
    justify: FlexJustify,
    direction: FlexDirection,
    wrap: FlexWrap,
    alignContent: FlexAlignContent,
    alignSelf: FlexAlignSelf
  };
}

