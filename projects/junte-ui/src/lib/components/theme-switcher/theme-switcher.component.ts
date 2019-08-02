import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { UI } from '../../enum/ui';

@Component({
  selector: 'jnt-theme-switcher',
  templateUrl: './theme-switcher.encapsulated.html'
})
export class ThemeSwitcherComponent {

  @HostBinding('attr.host') readonly host = 'jnt-theme-switcher-host';

  ui = UI;

  @HostBinding('attr.checked')
  @Input() checked = true;
  @Output() checkedChange = new EventEmitter<boolean>();
}
