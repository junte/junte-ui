import { TableFeatures } from '../../collections/table/enums';
import { ButtonType } from '../../forms/button/enums';
import { FormState, ValidationTypeError } from '../../forms/form/enums';
import { InputState, InputType } from '../../forms/input/enums';
import { SelectMode } from '../../forms/select/enums';
import { AppLayoutPosition } from '../../layout/app/enums';
import { BlockState } from '../../layout/block/enums';
import { RowAlign } from '../../layout/grid/enums';
import { SkeletonType } from '../../layout/skeleton/enums';
import { StackType } from '../../layout/stack/enums';
import { LinkTarget } from '../../navigation/link/enums';
import { PopoverPlacements, PopoverTriggers } from '../../overlays/popover/enums';
import { Breakpoint } from './breakpoint';
import { Color } from './color';
import { FlexAlign, FlexAlignContent, FlexAlignSelf, FlexDirection, FlexJustify, FlexWrap } from './flex';
import { Gutter } from './gutter';
import { icons } from './icons';
import { Orientation } from './orientation';
import { Outline } from './outline';
import { Position } from './position';
import { Scheme } from './scheme';
import { Shape } from './shape';
import { Size } from './size';
import { TextAlign } from './text';
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
  static color = Color;
  static text = {align: TextAlign};
  static icons = icons;
  static url = {matching: UrlMatching};
  static flex = {
    align: FlexAlign,
    justify: FlexJustify,
    direction: FlexDirection,
    wrap: FlexWrap,
    alignContent: FlexAlignContent,
    alignSelf: FlexAlignSelf
  };
  static layout = {
    grid: {row: {align: RowAlign}},
    stack: {type: StackType},
    block: {state: BlockState},
    skeleton: {type: SkeletonType},
    app: {position: AppLayoutPosition}
  };
  static navigation = {
    link: {
      target: LinkTarget
    }
  };
  static form = {
    input: {type: InputType, state: InputState},
    select: {mode: SelectMode},
    button: {type: ButtonType},
    validators: {
      typeError: ValidationTypeError
    },
    form: {state: FormState},
  };
  static overlays = {
    popover: {
      position: PopoverPlacements,
      trigger: PopoverTriggers
    }

  };
  static collections = {
    table: {features: TableFeatures}

  };
}
