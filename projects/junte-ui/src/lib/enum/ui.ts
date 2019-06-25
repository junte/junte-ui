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
  user2 = 'user-2',
  home = 'home',
  reload = 'reload',
  union = 'union',
  like = 'like',
  dislike = 'dislike',
  nodata = 'nodata',
  delete = 'delete',
  editSimple = 'edit-simple',
  info = 'info',
  link = 'link',
  edit = 'edit',
  tree = 'tree',
  user = 'user',
  addUser = 'add-user',
  deleteUser = 'delete-user',
  location = 'location',
  scissors = 'scissors',
  mail = 'mail',
  save = 'save',
  file = 'file',
  settings = 'settings',
  picture = 'picture',
  photoCamera = 'photo-camera',
  bell = 'bell',
  addGroup = 'add-group',
  deleteGroup = 'delete-group',
  dashboard = 'dashboard',
  cloud = 'cloud',
  creditCard = 'credit-card',
  download = 'download',
  filter = 'filter',
  message = 'message',
  calendar = 'calendar',
  qrCode = 'qr-code'
}

export enum Colors {
  white = '#FFFFFF',
  black = '#000000',
  blue = '#E7F5FF',
  blue500 = '#E6E9FA',
  orange = '#EE8030',
  green = '#00CCB1',
  greenDark = '#00B89F',
  teal = '#1D2932',
  red = '#FF6262',
  redDark = '#DE5B5B',
  yellow = '#F8DB42',
  purple = '#3949AB',
  purpleDark = '#00227B',
  purpleLight = '#6F74DD',
  purpleLighten = '#C4C9E7',
  gray = '#C4C4C4',
  gray100 = '#F5F5F5',
  gray200 = '#F7F7F7',
  gray300 = '#F2F2F2',
  gray400 = '#E9E9E9',
  gray500 = '#F3F4FC',
  gray600 = '#C4C4C4',
  gray700 = '#D0D0D0',
  gray800 = '#828282',
  gray900 = '#4F4F4F',
  gray1000 = '#F0F0F0',
  grayDark = '#343434',
  grayDark200 = '#1A1A1A',
  grayLight100 = '#F9F9F9',
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
  tiny = 'tiny',
  small = 'small',
  normal = 'normal',
  big = 'big',
  large = 'large',
  huge = 'huge'
}

export enum Outline {
  ghost = 'ghost',
  fill = 'fill',
  transparent = 'transparent'
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
  tiny = 'tiny',
  small = 'small',
  normal = 'normal',
  big = 'big',
  large = 'large',
  huge = 'huge'
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

export enum DropdownMode {
  click = 'click',
  hover = 'hover'
}

export enum Positions {
  rightTop = 'right-top',
  leftTop = 'left-top',
  inline = 'inline'
}

export enum PopoverPlacements {
  top = 'top',
  topLeft = 'top-left',
  topRight = 'top-right',
  right = 'right',
  rightTop = 'right-top',
  rightBottom = 'right-bottom',
  bottom = 'bottom',
  bottomLeft = 'bottom-left',
  bottomRight = 'bottom-right',
  left = 'left',
  leftTop = 'left-top',
  leftBottom = 'left-bottom'
}

export enum PopoverTriggers {
  hover = 'hover',
  click = 'click'
}

export enum Shapes {
  circle = 'circle',
  square = 'square'
}

export enum Width {
  fluid = 'fluid',
  default = 'default'
}

export class UI {
  static icons = Icons;
  static schemes = Schemes;
  static sizes = Sizes;
  static outline = Outline;
  static position = Positions;
  static shape = Shapes;
  static type = MenuType;
  static width = Width;
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
    type: TypeBlock,
  };
  static colors = Colors;
  static padding = Paddings;
  static state = InputState;
  static popover = {
    position: PopoverPlacements,
    trigger: PopoverTriggers
  };
}

