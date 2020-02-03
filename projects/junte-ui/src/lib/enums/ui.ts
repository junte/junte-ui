import { BlockState } from '../components/layout/block/enums';
import { RowAlign } from '../components/layout/grid/enums';
import { SkeletonType } from '../components/layout/skeleton/enums';
import { StackType } from '../components/layout/stack/enums';
import { Color } from './color';
import { FlexAlign, FlexAlignContent, FlexAlignSelf, FlexDirection, FlexJustify, FlexWrap } from './flex';
import { Gutter } from './gutter';
import { gesturesIcons } from './icons/gestures';
import { Orientation } from './orientation';
import { Outline } from './outline';
import { Position } from './position';
import { Scheme } from './scheme';
import { Shape } from './shape';
import { Size } from './size';
import { TextAlign } from './text';
import { Width } from './width';

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

export const FontIcons = {...FontDefaultIcons, ...FontEmojiIcons};
export type FontIcons = FontDefaultIcons | FontEmojiIcons;

export enum AnimatedIcons {
  runningMan = 'running-man',
  download = 'download',
  settings = 'settings',
  time = 'time',
  upload = 'upload',
  success = 'success'
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

export enum TypeButton {
  button = 'button',
  submit = 'submit'
}

export enum TypeIcon {
  font = 'font',
  svg = 'svg',
  animated = 'animated'
}

export enum ValidationTypeError {
  required = 'required',
  minlength = 'minlength'
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

export enum UrlMatching {
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
  static gutter = Gutter;
  static scheme = Scheme;
  static themes = Themes;
  static size = Size;
  static outline = Outline;
  static position = Position;
  static shape = Shape;
  static orientation = Orientation;
  static width = Width;
  static color = Color;
  static text = {
    align: TextAlign
  };
  static flex = {
    align: FlexAlign,
    justify: FlexJustify,
    direction: FlexDirection,
    wrap: FlexWrap,
    alignContent: FlexAlignContent,
    alignSelf: FlexAlignSelf
  };
  static layout = {
    grid: {
      row: {
        align: RowAlign
      }
    },
    stack: {
      type: StackType
    },
    block: {
      state: BlockState
    },
    skeleton: {
      type: SkeletonType
    },
    app: {
      position: AppLayoutPosition
    }
  };
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
    gestures: gesturesIcons,
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
  static state = InputState;
  static popover = {
    position: PopoverPlacements,
    trigger: PopoverTriggers
  };
  static url = {
    matching: UrlMatching
  };
  static table = {
    features: TableFeatures
  };
  static gantt = {
    statuses: GanttRequestStatuses
  };
}

