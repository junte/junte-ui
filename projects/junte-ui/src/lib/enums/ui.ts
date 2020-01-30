import { RowAlign } from '../components/layout/grid/enums';

export enum FontDefaultIcons {
  plus = 'plus',
  minus = 'minus',
  close = 'close',
  check = 'check',
  burger = 'menu',
  add = 'add',
  cancel = 'cancel',
  reload = 'reload',
  actions = 'actions',
  arrowLeft = 'arrow-left',
  arrowRight = 'arrow-right',
  arrowUp = 'arrow-up',
  arrowDown = 'arrow-down',
  chevronLeft = 'chevron-left',
  chevronRight = 'chevron-right',
  chevronUp = 'chevron-up',
  chevronDown = 'chevron-down',
  arrowFirst = 'arrow-first',
  arrowLast = 'arrow-last',
  chevronDoubleLeft = 'chevron-double-left',
  chevronDoubleRight = 'chevron-double-right',
  expand = 'expand',
  sortDown = 'sort-down',
  sorting = 'sorting',
  home = 'home',
  clover = 'clover',
  tree = 'tree',
  share = 'share',
  sync = 'sync',
  externalLink = 'external-link',
  download = 'download',
  cloud = 'cloud',
  save = 'save',
  delete = 'delete',
  edit = 'edit',
  file = 'file',
  copy = 'copy',
  cut = 'cut',
  mail = 'mail',
  printer = 'printer',
  picture = 'picture',
  camera = 'camera',
  user = 'user',
  addUser = 'add-user',
  delUser = 'del-user',
  team = 'team',
  addTeam = 'add-team',
  delTeam = 'del-team',
  contacts = 'contacts',
  profile = 'profile',
  view = 'view',
  search = 'search',
  dashboard = 'dashboard',
  power = 'power',
  settings = 'settings',
  warning = 'warning',
  information = 'information',
  question = 'question',
  stopping = 'stopping',
  project = 'project',
  money = 'money',
  like = 'like',
  dislike = 'dislike',
  bubble = 'bubble',
  tag = 'tag',
  bell = 'bell',
  filter = 'filter',
  map = 'map',
  compass = 'compass',
  pin = 'pin',
  finish = 'finish',
  solar = 'solar',
  moon = 'moon',
  accessLock = 'access-lock',
  accessUnlock = 'access-unlock',
  layout = 'layout',
  forms = 'forms',
  webProgramming = 'web-programming',
  elements = 'elements',
  graphic = 'graphic',
  time = 'time',
  calendar = 'calendar',
  grid = 'grid',
  creditCard = 'credit-card',
  run = 'run',
  send = 'send',
  poop = 'poop',
  collections = 'collections',
  more = 'more',
  overlays = 'overlays',
  charts = 'charts',
  crown = 'crown',
  direction = 'direction',
  beaker = 'beaker',
  mailbox = 'mailbox',
  email = 'email',
  cup = 'cup',
  move = 'move',
  pause = 'pause',
  bug = 'bug',
  anchor = 'anchor'
}

export enum FontGesturesIcons {
  pointerLeft = 'pointer-left',
  pointerUp = 'pointer-up',
  pointerRight = 'pointer-right',
  pointerDown = 'pointer-down',
  hand = 'hand',
  fingerTap = 'finger-tap',
  fingersTap = 'fingers-tap',
  reminder = 'reminder',
  fingersCrossed = 'fingers-crossed',
  fingersVictory = 'fingers-victory',
  gestureZoom = 'gesture-zoom',
  gesturePinch = 'gesture-pinch',
  fingersScrollHorizontal = 'fingers-scroll-horizontal',
  fingersScrollVertical = 'fingers-scroll-vertical',
  fingersScrollLeft = 'fingers-scroll-left',
  fingersScrollRight = 'fingers-scroll-right',
  pointerLeft2 = 'pointer-left2',
  pointerUp2 = 'pointer-up2',
  pointerRight2 = 'pointer-right2',
  pointerDown2 = 'pointer-down2',
  hand2 = 'hand2',
  fingerTap2 = 'finger-tap2',
  fingersTap2 = 'fingers-tap2',
  reminder2 = 'reminder2',
  gestureZoom2 = 'gesture-zoom2',
  gesturePinch2 = 'gesture-pinch2',
  fingersScrollHorizontal2 = 'fingers-scroll-horizontal2',
  fingersScrollVertical2 = 'fingers-scroll-vertical2',
  fingersScrollLeft2 = 'fingers-scroll-left2',
  fingersScrollRight2 = 'fingers-scroll-right2',
  fingersScrollVertical3 = 'fingers-scroll-vertical3'
}

export enum FontEmojiIcons {
  smile = 'smile',
  wink = 'wink',
  laughter = 'laughter',
  shocked = 'shocked',
  sad = 'sad',
  evil = 'evil',
  skull = 'skull',
  neutral = 'neutral'
}

export enum SvgDefaultIcons {
  figma = 'figma',
  gitlab = 'gitlab',
  angular = 'angular',
  arnold = 'arnold',
  dribbble = 'dribbble',
  github = 'github'
}

export enum SvgFlagsIcons {
  russia = 'russia',
  germany = 'germany',
  usa = 'usa',
  france = 'france',
  unitedKingdom = 'united-kingdom',
  italy = 'italy',
  spain = 'spain',
  sweden = 'sweden'
}

export const FontIcons = {...FontDefaultIcons, ...FontGesturesIcons, ...FontEmojiIcons};
export type FontIcons = FontDefaultIcons | FontGesturesIcons | FontEmojiIcons;

export enum AnimatedIcons {
  runningMan = 'running-man',
  download = 'download',
  settings = 'settings',
  time = 'time',
  upload = 'upload',
  success = 'success'
}

export enum Colors {
  white = '#FFFFFF',
  black = '#000000',
  blue = '#E7F5FF',
  blue100 = '#E6E9FA',
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
  gray300 = '#F0F0F0',
  gray400 = '#E9E9E9',
  paleNavy = '#F3F4FC',
  gray600 = '#C4C4C4',
  gray700 = '#D0D0D0',
  gray800 = '#828282',
  gray900 = '#4F4F4F',
  grayDark = '#343434'
}

export enum Schemes {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  fail = 'fail'
}

export enum Themes {
  light = 'light',
  dark = 'dark'
}

export enum InputState {
  normal = 'normal',
  failed = 'failed',
  success = 'success'
}

export enum BlockState {
  loading = 'loading',
  error = 'error'
}

export enum Sizes {
  tiny = 'tiny',
  small = 'small',
  normal = 'normal',
  large = 'large'
}

export enum Paddings {
  none = 'none',
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

export enum TypeIcon {
  font = 'font',
  svg = 'svg',
  animated = 'animated'
}

export enum TypeSkeleton {
  avatar = 'avatar',
  text = 'text',
  image = 'image'
}

export enum TextAlign {
  left = 'left',
  right = 'right'
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
  rowReverse = 'rowReverse',
  columnReverse = 'columnReverse'
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

export enum ValidationTypeError {
  required = 'required',
  minlength = 'minlength'
}

export enum Orientation {
  horizontal = 'horizontal',
  vertical = 'vertical'
}

export enum StackType {
  horizontal = 'horizontal',
  vertical = 'vertical'
}

export enum Gutter {
  none = 'none',
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
  password = 'password',
  number = 'number'
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
  rightTop = 'rightTop',
  leftTop = 'leftTop',
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

export enum TableFeatures {
  search = 'search'
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

export enum Matching {
  fullMatch = 'fullMatch',
  wildcard = 'wildcard'
}

export enum GanttRequestStatuses {
  accepting = 'accepting',
  accepted = 'accepted',
  declined = 'declined'
}

export enum AppLayoutPosition {
  default = 'default',
  fixed = 'fixed'
}

export class UI {
  // <editor-fold desc="icons">
  static icons = {
    accessLock: FontIcons.accessLock + ':font',
    accessUnlock: FontIcons.accessUnlock + ':font',
    actions: FontIcons.actions + ':font',
    add: FontIcons.add + ':font',
    addGroup: FontIcons.addTeam + ':font',
    addUser: FontIcons.addUser + ':font',
    anchor: FontIcons.anchor + ':font',
    arrowDown: FontIcons.arrowDown + ':font',
    arrowFirst: FontIcons.arrowFirst + ':font',
    arrowLast: FontIcons.arrowLast + ':font',
    arrowLeft: FontIcons.arrowLeft + ':font',
    arrowRight: FontIcons.arrowRight + ':font',
    arrowUp: FontIcons.arrowUp + ':font',
    beaker: FontIcons.beaker + ':font',
    bell: FontIcons.bell + ':font',
    burger: FontIcons.burger + ':font',
    calendar: FontIcons.calendar + ':font',
    cancel: FontIcons.cancel + ':font',
    charts: FontIcons.charts + ':font',
    chat: FontIcons.bubble + ':font',
    check: FontIcons.check + ':font',
    chevronDoubleLeft: FontIcons.chevronDoubleLeft + ':font',
    chevronDoubleRight: FontIcons.chevronDoubleRight + ':font',
    chevronDown: FontIcons.chevronDown + ':font',
    chevronLeft: FontIcons.chevronLeft + ':font',
    chevronRight: FontIcons.chevronRight + ':font',
    chevronUp: FontIcons.chevronUp + ':font',
    close: FontIcons.close + ':font',
    cloudComputing: FontIcons.cloud + ':font',
    clover: FontIcons.clover + ':font',
    collections: FontIcons.collections + ':font',
    compass: FontIcons.compass + ':font',
    contacts: FontIcons.contacts + ':font',
    copy: FontIcons.copy + ':font',
    creditCard: FontIcons.creditCard + ':font',
    crown: FontIcons.crown + ':font',
    cup: FontIcons.cup + ':font',
    dashboard: FontIcons.dashboard + ':font',
    delete: FontIcons.delete + ':font',
    delGroup: FontIcons.delTeam + ':font',
    delUser: FontIcons.delUser + ':font',
    direction: FontIcons.direction + ':font',
    dislike: FontIcons.dislike + ':font',
    download: FontIcons.download + ':font',
    edit: FontIcons.edit + ':font',
    elements: FontIcons.elements + ':font',
    email: FontIcons.email + ':font',
    expand: FontIcons.expand + ':font',
    externalLink: FontIcons.externalLink + ':font',
    file: FontIcons.file + ':font',
    filter: FontIcons.filter + ':font',
    finish: FontIcons.finish + ':font',
    forms: FontIcons.forms + ':font',
    graphic: FontIcons.graphic + ':font',
    grid: FontIcons.grid + ':font',
    home: FontIcons.home + ':font',
    information: FontIcons.information + ':font',
    layout: FontIcons.layout + ':font',
    like: FontIcons.like + ':font',
    mail: FontIcons.mail + ':font',
    mailbox: FontIcons.mailbox + ':font',
    map: FontIcons.map + ':font',
    minus: FontIcons.minus + ':font',
    money: FontIcons.money + ':font',
    moon: FontIcons.moon + ':font',
    more: FontIcons.more + ':font',
    move: FontIcons.move + ':font',
    overlays: FontIcons.overlays + ':font',
    photoCamera: FontIcons.camera + ':font',
    picture: FontIcons.picture + ':font',
    pin: FontIcons.pin + ':font',
    plus: FontIcons.plus + ':font',
    poop: FontIcons.poop + ':font',
    power: FontIcons.power + ':font',
    printer: FontIcons.printer + ':font',
    profile: FontIcons.profile + ':font',
    project: FontIcons.project + ':font',
    question: FontIcons.question + ':font',
    reload: FontIcons.reload + ':font',
    save: FontIcons.save + ':font',
    search: FontIcons.search + ':font',
    settings: FontIcons.settings + ':font',
    share: FontIcons.share + ':font',
    solar: FontIcons.solar + ':font',
    sortDown: FontIcons.sortDown + ':font',
    sorting: FontIcons.sorting + ':font',
    stopping: FontIcons.stopping + ':font',
    sync: FontIcons.sync + ':font',
    tag: FontIcons.tag + ':font',
    team: FontIcons.team + ':font',
    time: FontIcons.time + ':font',
    tree: FontIcons.tree + ':font',
    user: FontIcons.user + ':font',
    view: FontIcons.view + ':font',
    warning: FontIcons.warning + ':font',
    pause: FontIcons.pause + ':font',
    bug: FontIcons.bug + ':font',
    webProgramming: FontIcons.webProgramming + ':font',
    angular: SvgDefaultIcons.angular + ':svg:default',
    gitlab: SvgDefaultIcons.gitlab + ':svg:default',
    arnold: SvgDefaultIcons.arnold + ':svg:default',
    dribbble: SvgDefaultIcons.dribbble + ':svg:default',
    github: SvgDefaultIcons.github + ':svg:default',
    figma: SvgDefaultIcons.figma + ':svg:default',
    gestures: {
      fingersCrossed: FontIcons.fingersCrossed + ':font:junte-ui-icons-gestures',
      fingersScrollHorizontal2: FontIcons.fingersScrollHorizontal2 + ':font:junte-ui-icons-gestures',
      fingersScrollHorizontal: FontIcons.fingersScrollHorizontal + ':font:junte-ui-icons-gestures',
      fingersScrollLeft2: FontIcons.fingersScrollLeft2 + ':font:junte-ui-icons-gestures',
      fingersScrollLeft: FontIcons.fingersScrollLeft + ':font:junte-ui-icons-gestures',
      fingersScrollRight2: FontIcons.fingersScrollRight2 + ':font:junte-ui-icons-gestures',
      fingersScrollRight: FontIcons.fingersScrollRight + ':font:junte-ui-icons-gestures',
      fingersScrollVertical2: FontIcons.fingersScrollVertical2 + ':font:junte-ui-icons-gestures',
      fingersScrollVertical3: FontIcons.fingersScrollVertical3 + ':font:junte-ui-icons-gestures',
      fingersScrollVertical: FontIcons.fingersScrollVertical + ':font:junte-ui-icons-gestures',
      fingersTap2: FontIcons.fingersTap2 + ':font:junte-ui-icons-gestures',
      fingersTap: FontIcons.fingersTap + ':font:junte-ui-icons-gestures',
      fingersVictory: FontIcons.fingersVictory + ':font:junte-ui-icons-gestures',
      fingerTap2: FontIcons.fingerTap2 + ':font:junte-ui-icons-gestures',
      fingerTap: FontIcons.fingerTap + ':font:junte-ui-icons-gestures',
      pointerDown2: FontIcons.pointerDown2 + ':font:junte-ui-icons-gestures',
      pointerDown: FontIcons.pointerDown + ':font:junte-ui-icons-gestures',
      pointerLeft2: FontIcons.pointerLeft2 + ':font:junte-ui-icons-gestures',
      pointerLeft: FontIcons.pointerLeft + ':font:junte-ui-icons-gestures',
      pointerRight2: FontIcons.pointerRight2 + ':font:junte-ui-icons-gestures',
      pointerRight: FontIcons.pointerRight + ':font:junte-ui-icons-gestures',
      pointerUp2: FontIcons.pointerUp2 + ':font:junte-ui-icons-gestures',
      pointerUp: FontIcons.pointerUp + ':font:junte-ui-icons-gestures',
      reminder2: FontIcons.reminder2 + ':font:junte-ui-icons-gestures',
      reminder: FontIcons.reminder + ':font:junte-ui-icons-gestures',
      gesturePinch2: FontIcons.gesturePinch2 + ':font:junte-ui-icons-gestures',
      gesturePinch: FontIcons.gesturePinch + ':font:junte-ui-icons-gestures',
      gestureZoom2: FontIcons.gestureZoom2 + ':font:junte-ui-icons-gestures',
      gestureZoom: FontIcons.gestureZoom + ':font:junte-ui-icons-gestures',
      hand2: FontIcons.hand2 + ':font:junte-ui-icons-gestures',
      hand: FontIcons.hand + ':font:junte-ui-icons-gestures'
    },
    flags: {
      russia: SvgFlagsIcons.russia + ':svg:flags',
      germany: SvgFlagsIcons.germany + ':svg:flags',
      usa: SvgFlagsIcons.usa + ':svg:flags',
      france: SvgFlagsIcons.france + ':svg:flags',
      unitedKingdom: SvgFlagsIcons.unitedKingdom + ':svg:flags',
      italy: SvgFlagsIcons.italy + ':svg:flags',
      spain: SvgFlagsIcons.spain + ':svg:flags',
      sweden: SvgFlagsIcons.sweden + ':svg:flags'
    },
    emoji: {
      evil: FontIcons.evil + ':font:junte-ui-icons-emoji',
      laughter: FontIcons.laughter + ':font:junte-ui-icons-emoji',
      sad: FontIcons.sad + ':font:junte-ui-icons-emoji',
      shocked: FontIcons.shocked + ':font:junte-ui-icons-emoji',
      skull: FontIcons.skull + ':font:junte-ui-icons-emoji',
      smile: FontIcons.smile + ':font:junte-ui-icons-emoji',
      wink: FontIcons.wink + ':font:junte-ui-icons-emoji',
      neutral: FontIcons.neutral + ':font:junte-ui-icons-emoji',
    },
    animated: {
      runningMan: AnimatedIcons.runningMan + ':animated:default',
      success: AnimatedIcons.success + ':animated:default',
      download: AnimatedIcons.download + ':animated:default',
      settings: AnimatedIcons.settings + ':animated:default',
      time: AnimatedIcons.time + ':animated:default',
      upload: AnimatedIcons.upload + ':animated:default'
    }
  };
  // </editor-fold>
  static schemes = Schemes;
  static themes = Themes;
  static sizes = Sizes;
  static outline = Outline;
  static position = Positions;
  static shape = Shapes;
  static orientation = Orientation;
  static width = Width;
  static skeleton = {
    type: TypeSkeleton
  };
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
  };
  static gutter = Gutter;
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
  static text = {
    align: TextAlign
  };
  static select = SelectMode;
  static block = {
    state: BlockState
  };
  static colors = Colors;
  static padding = Paddings;
  static state = InputState;
  static popover = {
    position: PopoverPlacements,
    trigger: PopoverTriggers
  };
  static url = {
    matching: Matching
  };
  static table = {
    features: TableFeatures
  };
  static gantt = {
    statuses: GanttRequestStatuses
  };
  static layout = {
    grid: {
      row: {
        align: RowAlign
      }
    },
    app: {
      position: AppLayoutPosition
    }
  };
}

