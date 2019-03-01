import { Component, HostBinding, Input } from '@angular/core';
import { Icons, Outline, Schemes, Sizes, TypeButton, UI } from '../../enum/ui';

@Component({
  selector: 'jnt-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  ui = UI;

  @HostBinding('attr.loading')
  @Input()
  loading = false;

  @HostBinding('attr.icon')
  @Input() icon: Icons;

  @HostBinding('attr.scheme')
  @Input()
  scheme: Schemes = Schemes.primary;

  @HostBinding('attr.size')
  @Input()
  size: Sizes = Sizes.normal;

  @HostBinding('attr.outline')
  @Input()
  outline: Outline = Outline.fill;

  @HostBinding('attr.fluid')
  @Input()
  fluid = false;

  @HostBinding('attr.disabled')
  @Input()
  disabled = false;

  @Input()
  type: TypeButton = TypeButton.button;

  @Input()
  text: string;

  @Input()
  badge: number;

}
