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
  cup = 'cup'

  // query = 'query',
  // facebook = 'facebook',
  // google = 'google',
  // vkLogo = 'vk-logo',
  // instagram = 'instagram',
  // qrCode = 'qr-code',
  // playButton = 'play-button',
  // pause = 'pause',
  // stop = 'stop',
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

export enum SvgDefaultIcons {
  question = 'question',
  figma = 'figma',
  gitlab = 'gitlab',
  angular = 'angular',
  arnold = 'arnold',
  dribbble = 'dribbble',
  preview = 'preview',
  code = 'code',
  api = 'api'
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

export const FontIcons = {...FontDefaultIcons, ...FontGesturesIcons};
export type FontIcons = FontDefaultIcons | SvgFlagsIcons;

export const SvgIcons = {...SvgDefaultIcons, ...SvgFlagsIcons};
export type SvgIcons = SvgDefaultIcons | SvgFlagsIcons;

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

export enum TypeIcon {
  font = 'font',
  svg = 'svg',
  animated = 'animated'
}

export enum TypeSkeleton {
  avatar = 'avatar',
  text = 'text'
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

class ShortIcons {
  static icons = {
    add: FontIcons.add + ':font',
    check: FontIcons.check + ':font',
    plus: FontIcons.plus + ':font',
    burger: FontIcons.burger + ':font',
    close: FontIcons.close + ':font',
    cancel: FontIcons.cancel + ':font',
    search: FontIcons.search + ':font',
    information: FontIcons.information + ':font',
    contacts: FontIcons.contacts + ':font',
    minus: FontIcons.minus + ':font',
    arrowRight: FontIcons.arrowRight + ':font',
    arrowLeft: FontIcons.arrowLeft + ':font',
    expand: FontIcons.expand + ':font',
    sorting: FontIcons.sorting + ':font',
    arrowLast: FontIcons.arrowLast + ':font',
    arrowFirst: FontIcons.arrowFirst + ':font',
    sortDown: FontIcons.sortDown + ':font',
    home: FontIcons.home + ':font',
    reload: FontIcons.reload + ':font',
    actions: FontIcons.actions + ':font',
    like: FontIcons.like + ':font',
    dislike: FontIcons.dislike + ':font',
    stopping: FontIcons.stopping + ':font',
    delete: FontIcons.delete + ':font',
    externalLink: FontIcons.externalLink + ':font',
    edit: FontIcons.edit + ':font',
    tree: FontIcons.tree + ':font',
    user: FontIcons.user + ':font',
    addUser: FontIcons.addUser + ':font',
    delUser: FontIcons.delUser + ':font',
    pin: FontIcons.pin + ':font',
    mail: FontIcons.mail + ':font',
    save: FontIcons.save + ':font',
    file: FontIcons.file + ':font',
    settings: FontIcons.settings + ':font',
    picture: FontIcons.picture + ':font',
    photoCamera: FontIcons.camera + ':font',
    bell: FontIcons.bell + ':font',
    addGroup: FontIcons.addTeam + ':font',
    delGroup: FontIcons.delTeam + ':font',
    dashboard: FontIcons.dashboard + ':font',
    cloudComputing: FontIcons.cloud + ':font',
    creditCard: FontIcons.creditCard + ':font',
    download: FontIcons.download + ':font',
    filter: FontIcons.filter + ':font',
    chat: FontIcons.bubble + ':font',
    calendar: FontIcons.calendar + ':font',
    power: FontIcons.power + ':font',
    tag: FontIcons.tag + ':font',
    warning: FontIcons.warning + ':font',
    grid: FontIcons.grid + ':font',
    copy: FontIcons.copy + ':font',
    sync: FontIcons.sync + ':font',
    profile: FontIcons.profile + ':font',
    project: FontIcons.project + ':font',
    printer: FontIcons.printer + ':font',
    money: FontIcons.money + ':font',
    webProgramming: FontIcons.webProgramming + ':font',
    view: FontIcons.view + ':font',
    map: FontIcons.map + ':font',
    compass: FontIcons.compass + ':font',
    finish: FontIcons.finish + ':font',
    share: FontIcons.share + ':font',
    chevronDoubleLeft: FontIcons.chevronDoubleLeft + ':font',
    chevronDoubleRight: FontIcons.chevronDoubleRight + ':font',
    time: FontIcons.time + ':font',
    team: FontIcons.team + ':font',
    solar: FontIcons.solar + ':font',
    moon: FontIcons.moon + ':font',
    accessLock: FontIcons.accessLock + ':font',
    accessUnlock: FontIcons.accessUnlock + ':font',
    clover: FontIcons.clover + ':font',
    elements: FontIcons.elements + ':font',
    forms: FontIcons.forms + ':font',
    graphic: FontIcons.graphic + ':font',
    layout: FontIcons.layout + ':font',
    poop: FontIcons.poop + ':font',
    collections: FontIcons.collections + ':font',
    more: FontIcons.more + ':font',
    overlays: FontIcons.overlays + ':font',
    charts: FontIcons.charts + ':font',
    crown: FontIcons.crown + ':font',
    direction: FontIcons.direction + ':font',
    pointerLeft: FontIcons.pointerLeft + ':font:junte-ui-gestures',
    pointerUp: FontIcons.pointerUp + ':font:junte-ui-gestures',
    pointerRight: FontIcons.pointerRight + ':font:junte-ui-gestures',
    pointerDown: FontIcons.pointerDown + ':font:junte-ui-gestures',
    hand: FontIcons.hand + ':font:junte-ui-gestures',
    fingerTap: FontIcons.fingerTap + ':font:junte-ui-gestures',
    fingersTap: FontIcons.fingersTap + ':font:junte-ui-gestures',
    reminder: FontIcons.reminder + ':font:junte-ui-gestures',
    fingersCrossed: FontIcons.fingersCrossed + ':font:junte-ui-gestures',
    fingersVictory: FontIcons.fingersVictory + ':font:junte-ui-gestures',
    gestureZoom: FontIcons.gestureZoom + ':font:junte-ui-gestures',
    gesturePinch: FontIcons.gesturePinch + ':font:junte-ui-gestures',
    fingersScrollHorizontal: FontIcons.fingersScrollHorizontal + ':font:junte-ui-gestures',
    fingersScrollVertical: FontIcons.fingersScrollVertical + ':font:junte-ui-gestures',
    fingersScrollLeft: FontIcons.fingersScrollLeft + ':font:junte-ui-gestures',
    fingersScrollRight: FontIcons.fingersScrollRight + ':font:junte-ui-gestures',
    pointerLeft2: FontIcons.pointerLeft2 + ':font:junte-ui-gestures',
    pointerUp2: FontIcons.pointerUp2 + ':font:junte-ui-gestures',
    pointerRight2: FontIcons.pointerRight2 + ':font:junte-ui-gestures',
    pointerDown2: FontIcons.pointerDown2 + ':font:junte-ui-gestures',
    hand2: FontIcons.hand2 + ':font:junte-ui-gestures',
    fingerTap2: FontIcons.fingerTap2 + ':font:junte-ui-gestures',
    fingersTap2: FontIcons.fingersTap2 + ':font:junte-ui-gestures',
    reminder2: FontIcons.reminder2 + ':font:junte-ui-gestures',
    gestureZoom2: FontIcons.gestureZoom2 + ':font:junte-ui-gestures',
    gesturePinch2: FontIcons.gesturePinch2 + ':font:junte-ui-gestures',
    fingersScrollHorizontal2: FontIcons.fingersScrollHorizontal2 + ':font:junte-ui-gestures',
    fingersScrollVertical2: FontIcons.fingersScrollVertical2 + ':font:junte-ui-gestures',
    fingersScrollLeft2: FontIcons.fingersScrollLeft2 + ':font:junte-ui-gestures',
    fingersScrollRight2: FontIcons.fingersScrollRight2 + ':font:junte-ui-gestures',
    fingersScrollVertical3: FontIcons.fingersScrollVertical3 + ':font:junte-ui-gestures',
    beaker: FontIcons.beaker + ':font',
    mailbox: FontIcons.mailbox + ':font',
    arrowUp: FontIcons.arrowUp + ':font',
    arrowDown: FontIcons.arrowDown + ':font',
    chevronLeft: FontIcons.chevronLeft + ':font',
    chevronRight: FontIcons.chevronRight + ':font',
    chevronUp: FontIcons.chevronUp + ':font',
    chevronDown: FontIcons.chevronDown + ':font',
    email: FontIcons.email + ':font',
    cup: FontIcons.cup + ':font',
    // qrCode: FontIcons.qrCode + ':font',
    // query: FontIcons.query + ':font',
    // facebook: FontIcons.facebook + ':font',
    // google: FontIcons.google + ':font',
    // instagram: FontIcons.instagram + ':font',
    // vkLogo: FontIcons.vkLogo + ':font',
    // playButton: FontIcons.playButton + ':font',
    // pause: FontIcons.pause + ':font',
    // stop: FontIcons.stop + ':font',
    question: SvgDefaultIcons.question + ':svg:default',
    gitlab: SvgDefaultIcons.gitlab + ':svg:default',
    figma: SvgDefaultIcons.figma + ':svg:default',
    angular: SvgDefaultIcons.angular + ':svg:default',
    arnold: SvgDefaultIcons.arnold + ':svg:default',
    dribbble: SvgDefaultIcons.dribbble + ':svg:default',
    preview: SvgDefaultIcons.preview + ':svg:default',
    code: SvgDefaultIcons.code + ':svg:default',
    api: SvgDefaultIcons.api + ':svg:default',
    russia: SvgFlagsIcons.russia + ':svg:flags',
    germany: SvgFlagsIcons.germany + ':svg:flags',
    usa: SvgFlagsIcons.usa + ':svg:flags',
    france: SvgFlagsIcons.france + ':svg:flags',
    unitedKingdom: SvgFlagsIcons.unitedKingdom + ':svg:flags',
    italy: SvgFlagsIcons.italy + ':svg:flags',
    spain: SvgFlagsIcons.spain + ':svg:flags',
    sweden: SvgFlagsIcons.sweden + ':svg:flags',
    runningMan: AnimatedIcons.runningMan + ':animated:default',
    success: AnimatedIcons.success + ':animated:default'
  };
}

export class UI {
  static icons = {
    font: FontIcons,
    svg: {
      default: SvgDefaultIcons,
      flags: SvgFlagsIcons,
    },
    animated: AnimatedIcons,
    ...ShortIcons.icons
  };
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
  static url = {
    matching: Matching
  };
  static table = {
    features: TableFeatures
  };
  static gantt = {
    statuses: GanttRequestStatuses
  };
}

