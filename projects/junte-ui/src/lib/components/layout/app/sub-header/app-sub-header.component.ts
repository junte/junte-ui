import { Component, EventEmitter, HostBinding, Output } from '@angular/core';
import { UI } from '../../../../enums/ui';
import { PropertyApi } from '../../../../decorators/api';

@Component({
  selector: 'jnt-app-sub-header',
  templateUrl: './app-sub-header.encapsulated.html'
})
export class AppSubHeaderComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-app-sub-header-host';

  @PropertyApi({
    description: 'Output event for calling method for aside to open/close',
    type: 'EventEmitter'
  })
  @Output() burgerToggle = new EventEmitter();

}
