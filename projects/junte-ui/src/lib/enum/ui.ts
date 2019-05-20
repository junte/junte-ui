export enum Icons {
  check = 'check',
  plus = 'plus',
  burger = 'burger',
  close = 'close',
  cancel = 'cancel',
  search = 'search',
  arrowRight = 'arrow-right',
  arrowLeft = 'arrow-left',
  resize = 'resize',
  expand = 'expand',
  sort = 'sort',
  arrowLast = 'arrow-last',
  arrowFirst = 'arrow-first',
  sortDown = 'sort-down',
  salary = 'salary',
  user = 'user',
  home = 'home',
  reload = 'reload',
  union = 'union'
}

export enum Colors {
  white = '#FFFFFF',
  black = '#000000',
  blue = '#E7F5FF',
  orange = '#EE8030',
  green = '#00CCB1',
  teal = '#1D2932',
  red = '#FF6262',
  yellow = '#F8DB42',
  purple = '#3949AB',
  purpleDark = '#00227B',
  purpleLight = '#6F74DD',
  gray = '#C4C4C4',
  grayLight = '#F2F2F2',
  grayDark = '#4F4F4F'
}

export enum Schemes {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  fail = 'fail'
}

export enum InputState {
  normal = 'normal',
  failed = 'failed',
  success = 'success'
}


export enum Sizes {
  tiny = 'tiny',
  small = 'small',
  normal = 'normal',
  large = 'large'
}

export enum Paddings {
  small = 'small',
  normal = 'normal',
  large = 'large'
}

export enum Outline {
  ghost = 'ghost',
  fill = 'fill'
}

export enum TypeButton {
  button = 'button',
  submit = 'submit'
}

export enum TypeBlock {
  simple = 'simple',
  bordered = 'bordered'
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

export enum StackType {
  horizontal = 'horizontal',
  vertical = 'vertical'
}

export enum ValidationTypeError {
  required = 'required',
  minlength = 'minlength'
}

export enum MenuType {
  horizontal = 'horizontal',
  vertical = 'vertical'
}

export enum StackGutter {
  small = 'small',
  normal = 'normal',
  large = 'large'
}

export enum FormLayout {
  vertical = 'vertical',
  horizontal = 'horizontal',
  inline = 'inline'
}

export enum InputType {
  text = 'text',
  password = 'password'
}

export enum SelectMode {
  single = 'single',
  multiple = 'multiple'
}

export enum Positions {
  rightTop = 'right-top',
  leftTop = 'left-top',
  inline = 'inline'
}

export enum Shapes {
  circle = 'circle',
  square = 'square'
}

export class UI {
  static icons = Icons;
  static schemes = Schemes;
  static sizes = Sizes;
  static outline = Outline;
  static position = Positions;
  static shape = Shapes;
  static type = MenuType;
  static flex = {
    align: FlexAlign,
    justify: FlexJustify,
    direction: FlexDirection,
    wrap: FlexWrap,
    alignContent: FlexAlignContent,
    alignSelf: FlexAlignSelf
  };
  static stack = {
    type: StackType,
    gutter: StackGutter
  };
  static form = {
    layout: FormLayout,
    input: InputType,
    button: {
      type: TypeButton
    },
    validators: {
      typeError: ValidationTypeError
    }
  };
  static select = SelectMode;
  static block = {
    type: TypeBlock
  };
  static colors = Colors;
  static padding = Paddings;
  static state = InputState;
}

