import { GanttTypes } from '../../collections/gantt/enums';
import { TableFeatures } from '../../collections/table/enums';
import { ButtonType } from '../../forms/button/enums';
import { DatePickerFeatures } from '../../forms/date-picker/enums';
import { ValidationTypeError } from '../../forms/form/enums';
import { InputScheme, InputType } from '../../forms/input/enums';
import { SelectMode } from '../../forms/select/enums';
import { AppLayoutPosition } from '../../layout/app/enums';
import { RowAlign, RowJustify } from '../../layout/grid/enums';
import { SkeletonType } from '../../layout/skeleton/enums';
import { StackType } from '../../layout/stack/enums';
import { LinkTarget } from '../../navigation/link/enums';
import { PagerMode } from '../../navigation/pager/enums';
import { PopoverPlacements, PopoverTriggers } from '../../overlays/popover/enums';
import { Breakpoint } from './breakpoint';
import { Color } from './color';
import { Feature } from './feature';
import { FlexAlign, FlexAlignContent, FlexAlignSelf, FlexDirection, FlexJustify, FlexWrap } from './flex';
import { Gutter } from './gutter';
import { Height } from './height';
import { icons } from './icons';
import { Orientation } from './orientation';
import { Outline } from './outline';
import { Position } from './position';
import { Scheme } from './scheme';
import { Shape } from './shape';
import { Size } from './size';
import { State } from './state';
import { TextAlign, TextTransform } from './text';
import { Theme } from './theme';
import { UrlMatching } from './url';
import { Width } from './width';

export class UI {
  static gutter = Gutter;
  static theme = Theme;
  static scheme = Scheme;
  static size = Size;
  static outline = Outline;
  static position = Position;
  static breakpoint = Breakpoint;
  static shape = Shape;
  static orientation = Orientation;
  static width = Width;
  static height = Height;
  static color = Color;
  static text = {align: TextAlign, transform: TextTransform};
  static icons = icons;
  static url = {matching: UrlMatching};
  static feature = Feature;
  static state = State;
  static flex = {
    align: FlexAlign,
    justify: FlexJustify,
    direction: FlexDirection,
    wrap: FlexWrap,
    alignContent: FlexAlignContent,
    alignSelf: FlexAlignSelf
  };
  static layout = {
    grid: {row: {align: RowAlign, justify: RowJustify}},
    stack: {type: StackType},
    skeleton: {type: SkeletonType},
    app: {position: AppLayoutPosition}
  };
  static navigation = {
    link: {
      target: LinkTarget
    },
    pager: {
      mode: PagerMode
    }
  };
  static forms = {
    input: {type: InputType, scheme: InputScheme},
    select: {mode: SelectMode},
    button: {type: ButtonType},
    validators: {
      typeError: ValidationTypeError
    },
    datePicker: {features: DatePickerFeatures}
  };
  static overlays = {
    popover: {
      position: PopoverPlacements,
      trigger: PopoverTriggers
    }

  };
  static collections = {
    table: {features: TableFeatures},
    gantt: {type: GanttTypes}
  };
}
