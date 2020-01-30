import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { PropertyApi } from '../../../../decorators/api';
import { Outline, Schemes, Sizes, UI, Width } from '../../../../enums/ui';
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
    path: 'ui.sizes',
    options: [Sizes.tiny, Sizes.small, Sizes.normal, Sizes.large],
    default: Sizes.normal
  })

  @HostBinding('attr.size')
  @Input() size: Sizes = Sizes.normal;

  @PropertyApi({
    description: 'Button group color scheme',
    path: 'ui.schemes',
    options: [Schemes.primary, Schemes.secondary, Schemes.success, Schemes.fail],
    default: Schemes.primary
  })

  @HostBinding('attr.scheme')
  @Input() scheme: Schemes = Schemes.primary;

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
