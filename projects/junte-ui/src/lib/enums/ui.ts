import { TableFeatures } from '../components/collections/table/enums';
import { ButtonType } from '../components/forms/button/enums';
import { ValidationTypeError } from '../components/forms/form/enums';
import { InputState, InputType } from '../components/forms/input/enums';
import { SelectMode } from '../components/forms/select/enums';
import { AppLayoutPosition } from '../components/layout/app/enums';
import { BlockState } from '../components/layout/block/enums';
import { RowAlign } from '../components/layout/grid/enums';
import { SkeletonType } from '../components/layout/skeleton/enums';
import { StackType } from '../components/layout/stack/enums';
import { LinkTarget } from '../components/navigation/link/enums';
import { PopoverPlacements, PopoverTriggers } from '../components/overlays/popover/enums';
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
import { UrlMatching } from './url';
import { Width } from './width';

export class UI {
  static gutter = Gutter;
  static scheme = Scheme;
  static size = Size;
  static outline = Outline;
  static position = Position;
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
    }
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
