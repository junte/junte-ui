import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { PropertyApi } from '../../../core/decorators/api';
import { Outline } from '../../../core/enums/outline';
import { Scheme } from '../../../core/enums/scheme';
import { Size } from '../../../core/enums/size';
import { UI } from '../../../core/enums/ui';
import { Width } from '../../../core/enums/width';
import { ButtonComponent } from '../button.component';

@Component({
  selector: 'jnt-button-group',
  templateUrl: './button-group.encapsulated.html'
})
export class ButtonGroupComponent {

  @HostBinding('attr.host') readonly host = 'jnt-button-group-host';

  ui = UI;

  @ContentChildren(ButtonComponent, {descendants: true})
  buttons: QueryList<ButtonComponent>;

  @PropertyApi({
    description: 'Button group size',
    path: 'ui.size',
    options: [Size.tiny, Size.small, Size.normal, Size.large],
    default: Size.normal
  })

  @HostBinding('attr.size')
  @Input() size: Size = Size.normal;

  @PropertyApi({
    description: 'Button group color scheme',
    path: 'ui.schemes',
    options: [Scheme.primary, Scheme.secondary, Scheme.success, Scheme.fail],
    default: Scheme.primary
  })

  @HostBinding('attr.scheme')
  @Input() scheme: Scheme = Scheme.primary;

  @PropertyApi({
    description: 'Button group outline',
    path: 'ui.outline',
    default: Outline.fill,
    options: [Outline.transparent, Outline.ghost, Outline.fill]
  })

  @HostBinding('attr.outline')
  @Input() outline: Outline = Outline.fill;

  @PropertyApi({
    description: 'Button group width',
    path: 'ui.width',
    default: Width.default,
    options: [Width.default, Width.fluid]
  })

  @HostBinding('attr.width')
  @Input() width: Width = Width.default;

}
