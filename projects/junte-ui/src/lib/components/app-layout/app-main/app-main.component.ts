import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'jnt-app-main',
  templateUrl: './encapsulated.html'
})
export class AppMainComponent {

  @HostBinding('attr.host') readonly host = 'jnt-app-main-host';

}
