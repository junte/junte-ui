import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'jnt-app-main',
  templateUrl: './app-main.encapsulated.html'
})
export class AppMainComponent {

  @HostBinding('attr.host') readonly host = 'jnt-app-main-host';

}
