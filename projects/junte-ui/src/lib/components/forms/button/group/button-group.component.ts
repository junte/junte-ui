import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { ButtonComponent } from '../button.component';
import { Outline, Schemes, Sizes, UI, Width } from '../../../../enum/ui';

@Component({
  selector: 'jnt-button-group',
  templateUrl: './button-group.encapsulated.html'
})
export class ButtonGroupComponent {

  @HostBinding('attr.host') readonly host = 'jnt-button-group-host';

  ui = UI;

  @ContentChildren(ButtonComponent, {descendants: true})
  buttons: QueryList<ButtonComponent>;

  @HostBinding('attr.size')
  @Input() size: Sizes = Sizes.normal;

  @HostBinding('attr.scheme')
  @Input() scheme: Schemes = Schemes.primary;

  @HostBinding('attr.outline')
  @Input() outline: Outline = Outline.fill;

  @HostBinding('attr.width')
  @Input() width: Width = Width.default;

}
