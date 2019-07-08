import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'jnt-app-body',
  templateUrl: './app-body.encapsulated.html'
})
export class AppBodyComponent {

  @HostBinding('attr.host') readonly host = 'jnt-app-body-host';

  constructor() {
  }
}
