import { GanttTypes } from '../../collections/gantt/enums';
import { CarouselOrientation } from '../../dynamic/carousel/carousel.enums';
import { ButtonType } from '../../forms/button/button.enums';
import { DatePickerType } from '../../forms/date-picker/enums';
import { InputAutocomplete, InputScheme, InputType } from '../../forms/input/input.enums';
import { SelectMode } from '../../forms/select/enums';
import { SkeletonType } from '../../layout/skeleton/enums';
import { LinkTarget } from '../../navigation/link/link.enums';
import { PagerMode } from '../../navigation/pager/enums';
import { ModalClosedReason, ModalScheme } from '../../overlays/modal/modal.enums';
import { Behaviour } from './behaviour';
import { Breakpoint } from './breakpoint';
import { Color } from './color';
import { Context } from './context';
import { Feature } from './feature';
import { Fit } from './fit';
import { FlexAlign, FlexDirection, FlexJustify, FlexWrap } from './flex';
import { Gutter } from './gutter';
import { Height } from './height';
import { IconModifier } from './icon-modifier';
import { icons } from './icons';
import { Key, Modifier } from './keyboard';
import { Orientation } from './orientation';
import { Outline } from './outline';
import { Placement } from './placement';
import { Position } from './position';
import { Scheme } from './scheme';
import { Shape } from './shape';
import { Size } from './size';
import { State } from './state';
import { Stroke } from './stroke';
import { CheckboxStyle, MenuStyle, SwitchStyle } from './style';
import { TextAlign, TextTransform } from './text';
import { Theme } from './theme';
import { Triggers } from './triggers';
import { UrlMatching } from './url';
import { Validator } from './validator';
import { ViewportType } from './viewport';
import { Width } from './width';

export const UI = {
  gutter: Gutter,
  theme: Theme,
  scheme: Scheme,
  size: Size,
  stroke: Stroke,
  outline: Outline,
  position: Position,
  breakpoint: Breakpoint,
  behaviour: Behaviour,
  shape: Shape,
  orientation: Orientation,
  width: Width,
  height: Height,
  color: Color,
  icons: icons,
  matching: UrlMatching,
  feature: Feature,
  state: State,
  fit: Fit,
  target: LinkTarget,
  align: FlexAlign,
  justify: FlexJustify,
  direction: FlexDirection,
  wrap: FlexWrap,
  validator: Validator,
  placement: Placement,
  trigger: Triggers,
  context: Context,
  text: {align: TextAlign, transform: TextTransform},
  datePicker: {type: DatePickerType},
  skeleton: {type: SkeletonType},
  pager: {mode: PagerMode},
  input: {type: InputType, scheme: InputScheme, autocomplete: InputAutocomplete},
  select: {mode: SelectMode, autocomplete: InputAutocomplete},
  button: {type: ButtonType},
  carousel: {orientation: CarouselOrientation},
  gantt: {type: GanttTypes},
  menu: {style: MenuStyle},
  keyboard: {key: Key, modifier: Modifier},
  icon: {modifier: IconModifier},
  switch: {style: SwitchStyle},
  checkbox: {style: CheckboxStyle},
  modal: {scheme: ModalScheme, closedReason: ModalClosedReason},
  viewport: {type: ViewportType}
};
