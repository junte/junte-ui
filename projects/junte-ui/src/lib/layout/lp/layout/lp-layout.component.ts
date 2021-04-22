import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'jnt-lp-layout',
  templateUrl: './lp-layout.encapsulated.html'
})
export class LpLayoutComponent {

  @HostBinding('attr.host') readonly host = 'jnt-lp-layout-host';

}
