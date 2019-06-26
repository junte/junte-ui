import { Component, EventEmitter, HostBinding, Output } from '@angular/core';
import { UI } from '../../../enum/ui';

@Component({
  selector: 'jnt-app-sub-header',
  templateUrl: './app-sub-header.encapsulated.html'
})
export class AppSubHeaderComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-app-sub-header-host';

  @Output() burger = new EventEmitter();

}
